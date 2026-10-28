const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
      >
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-indigo-700"
        >
          StudySpace<span className="text-slate-900">.</span>
        </a>
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-indigo-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
