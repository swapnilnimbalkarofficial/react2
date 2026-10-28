import { useState } from "react";

const skills = [
  "JavaScript",
  "React basics",
  "HTML & CSS",
  "Tailwind CSS",
  "Java",
  "REST APIs",
];
const projects = [
  {
    title: "Student Portfolio",
    type: "Frontend practice",
    description:
      "A responsive page to present learning goals, skills and sample projects.",
    stack: "React · Vite · Tailwind",
  },
  {
    title: "Product Explorer",
    type: "API practice idea",
    description:
      "A learning exercise for fetching and displaying product data with loading and error states.",
    stack: "React · Fetch API",
  },
  {
    title: "Task Tracker",
    type: "State practice idea",
    description:
      "A small UI exercise for adding tasks and marking them complete.",
    stack: "React · useState",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [email, setEmail] = useState("");

  function handleContactSubmit(event) {
    event.preventDefault();
    alert(
      `Demo form only. Replace this with a real contact service. Email entered: ${email}`,
    );
  }

  return (
    <div id="home">
      <section className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.4fr_0.8fr] md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700">
              CDAC learner · Frontend practice
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Learning to build useful things for the web.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A student portfolio for documenting concepts, practicing projects,
              and tracking progress one step at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Explore projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:border-indigo-400 hover:text-indigo-700"
              >
                Contact section
              </a>
            </div>
          </div>
          <aside className="rounded-3xl border border-white bg-white p-7 shadow-xl shadow-indigo-100/70">
            <p className="text-sm font-semibold text-slate-500">
              CURRENT FOCUS
            </p>
            <p className="mt-3 text-2xl font-bold">React fundamentals</p>
            <p className="mt-2 leading-7 text-slate-600">
              Components, props, state, events, responsive styling and API
              requests.
            </p>
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              aria-expanded={showDetails}
              className="mt-5 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold transition hover:bg-indigo-100"
            >
              {showDetails ? "Hide learning plan" : "Show learning plan"}
            </button>
            {showDetails && (
              <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-600">
                <li>Build small components</li>
                <li>Practice state and events</li>
                <li>Make the layout responsive</li>
                <li>Test loading and error states</li>
              </ul>
            )}
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Introduction"
          title="A little about this learning space"
          description="This page is a starter template. Replace this text with your own introduction and only include skills or experience you can confidently discuss."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Learn by building",
              "Turn class concepts into small working examples.",
            ],
            [
              "Understand the code",
              "Practice explaining what each component and hook does.",
            ],
            [
              "Improve gradually",
              "Test the UI, debug errors and refine one feature at a time.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Skills"
            title="Topics I am practicing"
            description="Edit this sample list to match your actual current learning progress."
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Practice work"
          title="Projects and project ideas"
          description="These are sample learning projects, not claims of completed production work. Update the status and links when your projects are ready."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                {project.type}
              </p>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {project.description}
              </p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium text-slate-500">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="learning" className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            eyebrow="Learning progress"
            title="A simple roadmap"
            description="Use this as a checklist; it does not automatically measure your course progress."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "HTML & CSS", "Structure and styling"],
              ["02", "JavaScript", "Functions, arrays and objects"],
              ["03", "React", "Components, props and state"],
              ["04", "API practice", "Fetch, loading and error UI"],
            ].map(([number, title, detail]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <p className="text-sm font-bold text-cyan-300">{number}</p>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Contact"
          title="Let's connect"
          description="The email and form below are placeholders. This demo form does not send email or store submissions."
        />
        <form
          onSubmit={handleContactSubmit}
          className="max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold"
          >
            Your email address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <button
            type="submit"
            className="mt-4 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Test demo form
          </button>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Placeholder only. Connect a backend or trusted form service before
            using this for real messages.
          </p>
        </form>
      </section>
    </div>
  );
}
