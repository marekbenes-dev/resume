// app/page.tsx
import ExperienceList, { ExperienceItem } from "@/components/ExperienceList";
import LeftNav from "@/components/LeftNav";
import ThemeToggle from "@/components/ThemeToggle";
import Script from "next/script";

const sections = [
  { id: "about",   label: "About" },
  { id: "experience",label: "Experience" },
  { id: "projects",  label: "Projects" },
  { id: "skills",    label: "Skills" },
  { id: "education", label: "Education" },
  { id: "last-race", label: "Last Race" },
  { id: "contact",   label: "Contact" },
];

const experience: ExperienceItem[] = [
  {
    period: "2024 - 2025",
    title: "Senior Front End Developer",
    company: "SIKO",
    location: "Prague, Czechia",
    bullets: [
      "Migrated a large JSP monolith to modern Angular",
      "Improved performance (reached optimal values in Core Web Vitals)",
      "Was in charge of monitoring Web Vitals and maintaining good SEO",
      "Organized FE sync meetings to share knowledge and improve code quality",
      "Oversaw PayPal integration for Germany",
    ],
  },
  {
    period: "2021 - 2024",
    title: "Front End Developer",
    company: "Actum Digital",
    location: "Prague, Czechia",
    bullets: [
      "Delivered two Angular applications for two clients",
      "Was in charge of responsive design",
    ],
  },
  {
    period: "2020 - 2021",
    title: "Front End Developer",
    company: "Alza",
    location: "Prague, Czechia",
    bullets: [
      "Contributed to the development of a large ERP platform using Angular",
      "Used GraphQL for efficient data fetching",
    ],
  },
  {
    period: "2019 - 2020",
    title: "Fullstack Developer",
    company: "Robotron Datenbank-Software",
    location: "Dresden, Germany",
    bullets: [
      "Contributed to the development of client' platform using Angular",
      "Built application from scratch using MEAN stack (MongoDB, Express, Angular, Node.js)",
    ],
  },
  {
    period: "2018 - 2019",
    title: "Front End Developer",
    company: "CompuGroup Medical",
    location: "Prague, Czechia",
    bullets: [
      "Contributed to the development of medical platform using AngularJS",
    ],
  },
];

export default function Page() {
  return (
    <>
      <Script id="person-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Marek Beneš",
            "jobTitle": "FE developer",
            "url": "https://example.com",
            "sameAs": [
              "https://github.com/marekbenes-dev",
              "https://www.linkedin.com/in/marek-beneš-936279154/"
            ]
          }),
        }}
      />

      <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-[280px_1fr] print:block">
        <aside
          className="lg:sticky lg:top-5 lg:self-start lg:pr-6 print:hidden"
          aria-label="Section navigation"
        >
          <LeftNav sections={sections} />
          <footer className="mt-6 text-sm space-y-1">
            <p><a className="underline decoration-slate-300 underline-offset-2" href="mailto:benes.developer@gmail.com">benes.developer@gmail.com</a></p>
            <p><a className="underline decoration-slate-300 underline-offset-2" href="https://github.com/marekbenes-dev" target="_blank" rel="noopener noreferrer">github.com/marekbenes-dev</a></p>
          </footer>
          <div className="mt-3">
            <ThemeToggle />
          </div>
        </aside>


        {/* Main content */}
        <main id="content" tabIndex={-1} className="pb-12 pt-6 text-slate-800 dark:text-slate-100">
          <header className="flex flex-col pb-8 flex-shrink-0">
            <h1 className="font-semibold text-2xl">Marek Beneš</h1>
            <span className="font-medium text-lg">Front End Developer</span>
          </header>
          <section id="about" aria-labelledby="about-h" className="mb-10">
            <h2 id="about-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">About Me</h2>
            <div>
              <ul className="list-[square] list-inside space-y-1 py-4">
              <li>Front End development</li>
              <li>TypeScript, Angular, Next.js</li>
              <li>6+ years development experience</li>
              <li>Father to three kids</li>
              <li>Cyclist and runner</li>
              <li>Intermittent fasting enthusiast</li>
            </ul>
            </div>
          </section>

          <section id="experience" aria-labelledby="experience-h" className="mb-10">
            <h2 id="experience-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Experience</h2>

            <ExperienceList items={experience}/>
          </section>

          <section id="projects" aria-labelledby="projects-h" className="mb-10">
            <h2 id="projects-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Projects</h2>

            <article aria-labelledby="proj-1-h" className="mt-3">
              <h3 id="proj-1-h" className="font-semibold">
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                   href="https://topten-segments.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Strava App
                </a>
              </h3>
              <p className="text-sm">TypeScript, Next.js, Playwright</p>
              <ul className="list-[square] text-sm pl-5 mt-2 space-y-1">
                <li>Started project to learn Next.js, Playwright and Strava API</li>
                <li>Displays Activities in more complex way</li>
                <li>Allows in depth Starred segments overview</li>
                <li>Enables you to search nearby attractive segments</li>
                <li>Provides batch refactor activity functionality</li>
              </ul>
            </article>

           <article aria-labelledby="proj-2-h" className="mt-3">
              <h3 id="proj-2-h" className="font-semibold">
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                   href="https://github.com/marekbenes-dev/the-Marek-app" target="_blank" rel="noopener noreferrer">
                  Personal time management app
                </a>
              </h3>
              <p className="text-sm">TypeScript, Angular, Express, Node, MongoDB</p>
              <ul className="list-[square] text-sm pl-5 mt-2 space-y-1">
                <li>App built in MEAN stack to provide an easy way to schedule activites and manage family finances</li>
                <li>Used to learn MEAN stack, previously hosted by Heroku, now to be moved to Vercel</li>
              </ul>
            </article>

                  <article aria-labelledby="proj-3-h" className="mt-3">
              <h3 id="proj-3-h" className="font-semibold">
                <a className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                   href="https://github.com/marekbenes-dev/auto-select-directive" target="_blank" rel="noopener noreferrer">
                  Custom AngularJS autoselect directive
                </a>
              </h3>
              <p className="text-sm">JavaScript, AngularJS</p>
              <ul className="list-[square] text-sm pl-5 mt-2 space-y-1">
                <li>Built in CompuGroup to provide a stable and maintainable autoselect</li>
              </ul>
            </article>
          </section>

          <section id="skills" aria-labelledby="skills-h" className="mb-10">
            <h2 id="skills-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Skills</h2>
            <ul className="grid md:grid-cols-1 grid-cols-2 gap-x-8 py-4 gap-y-1 list-[square] list-inside">
              <li><strong>Front end:</strong> TypeScript • Angular (RxJS, NgRx) • React • Next.js • Tailwind CSS</li>
              <li><strong>Back end:</strong> Node.js (Express/Nest basics) • REST/GraphQL</li>
              <li><strong>Testing:</strong> Playwright (e2e) • Jest/Vitest • Testing Library</li>
              <li><strong>Practices:</strong> A11y • Core Web Vitals • SSR/SSG/ISR • SEO • CI/CD • Design systems</li>
              <li><strong>Observability:</strong> Sentry • RUM • Web Vitals monitoring</li>
            </ul>
          </section>

          <section id="education" aria-labelledby="education-h" className="mb-10">
            <h2 id="education-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Education</h2>
            <p className="py-4"><strong>Psychology</strong>, PVŠPS <time dateTime="2021">2021</time></p>
            <p>Bachelor in psychology</p>
          </section>

          <section id="last-race" aria-labelledby="last-race-h" className="mb-10">
            <h2 id="last-race-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Last Race</h2>
            <div className="py-4">
              <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id="16041627658" data-style="standard" data-from-embed="false"></div>
              <Script src="https://strava-embeds.com/embed.js"></Script>
            </div>
          </section>

          <section id="contact" aria-labelledby="contact-h">
            <h2 id="contact-h" tabIndex={-1} className="text-xl font-semibold border-b border-foreground/20 py-4">Contact</h2>
            <p className="py-4">
              Email: <a className="underline decoration-slate-300 underline-offset-2" href="mailto:benes.developer@gmail.com">benes.developer@gmail.com</a><br />
              LinkedIn: <a className="underline decoration-slate-300 underline-offset-2" href="https://www.linkedin.com/in/marek-beneš-936279154//" target="_blank" rel="noopener noreferrer">/in/marek-beneš-936279154/</a>
            </p>
          </section>
        </main>
         <footer className="text-xs text-foreground/60 flex flex-row gap-2 items-center font-semibold">
          © 2025 Marek Beneš
          </footer>
      </div>
    </>
  );
}
