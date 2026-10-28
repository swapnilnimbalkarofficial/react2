export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} StudySpace. Student learning template.
        </p>
        <a
          href="#home"
          className="font-semibold text-indigo-700 hover:text-indigo-900"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
