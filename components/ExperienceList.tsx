export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
};

export default function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="py-4 px-1">
      <div className="text-md font-text flex flex-col gap-y-16">
        {items.map((it, idx) => (
          <article key={idx} className="flex flex-col">
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
              <p className="text-sm min-w-[120px] mt-0.5 font-semibold text-foreground/60">
                {it.period}
              </p>

              <div className="flex flex-col gap-y-2">
                <div>
                  <p className="font-semibold">{it.title}</p>
                  <p className="text-foreground/80">{it.company}</p>
                  <p className="text-sm text-foreground/60">{it.location}</p>
                </div>

                <ul className="list-[square] list-inside">
                  {it.bullets.map((b, i) => (
                    <li key={i} className="text-sm">{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
