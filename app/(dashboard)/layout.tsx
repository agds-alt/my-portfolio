import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar />
      <PWAInstallPrompt />

      {/* Main Content */}
      <main className="lg:ml-[var(--sidebar-width,280px)] min-h-screen transition-all duration-300">
        {/* Top Bar with Theme Toggle */}
        <div className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex-1" />
            <ThemeToggle />
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
