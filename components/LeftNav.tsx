"use client";

import * as React from "react";
type Section = { id: string; label: string };

export default function LeftNav({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // clear "clicked" state when user scrolls back to the section they clicked to
          if (clicked && activeId === e.target.id && e.isIntersecting) {
            setTimeout(() => setClicked(false), 300); // slightly delay to avoid flicker
          }

          if (e.isIntersecting && !clicked) {
            setActiveId(e.target.id);
          }
        }
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: [0, 1] }
    );
    sections.forEach(({ id }) => {
      //console.log("observing", id);
      const el = document.getElementById(id);
      //console.log(el);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections, clicked, activeId]);

  // 3) Click => set active immediately + move focus to the section heading
  const handleClick = (id: string) => {
    // set a "clicked" flag to ignore scroll events until the user scrolls back to the clicked section
    setClicked(true);
    setActiveId(id); // immediate highlight
  };

  return (
    <nav aria-label="Resume sections">
      <ul className="space-y-1">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          const ariaLabel = label.replace(/^\s*\[\d+\]\s*/, "");
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={ariaLabel}
                aria-current={isActive ? "true" : undefined}
                onClick={() => handleClick(id)}
                className={[
                  "block rounded-md px-2 py-2 transition",
                  "hover:bg-foreground/10 hover:text-foreground hover:dark:bg-white/10",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                  isActive
                    ? "bg-foreground/10 text-foreground dark:bg-white/10 font-semibold"
                    : "text-slate-800 dark:text-slate-100",
                ].join(" ")}
              >
                <span aria-hidden="true">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
