export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {currentYear} Abdul Gofur (agds-dev). All rights reserved.</p>
          <p>Built with Next.js 16, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
