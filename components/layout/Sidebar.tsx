"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  FolderOpen,
  FolderClosed,
  ChevronRight,
  ChevronDown,
  User,
  Mail,
  Menu,
  X
} from "lucide-react";

const sidebarItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  {
    name: "Completed Projects",
    icon: FolderOpen,
    children: [
      { name: "WC Check", href: "/projects/wc-check" },
      { name: "AGDS Corp POS", href: "/projects/agds-pos" },
      { name: "Selisih Berat", href: "/projects/selisih-berat" }
    ]
  },
  {
    name: "Ongoing Projects",
    icon: FolderClosed,
    children: [
      { name: "AGDS POS v2.0", href: "/ongoing/agds-pos-v2" },
      { name: "SaaS Boilerplate", href: "/ongoing/personal-saas" },
      { name: "IoT Monitoring", href: "/ongoing/monitoring-platform" }
    ]
  },
  { name: "Contact", href: "/contact", icon: Mail }
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(["Completed Projects", "Ongoing Projects"]);
  const pathname = usePathname();

  // Update CSS variable when sidebar state changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      isOpen ? '280px' : '80px'
    );
  }, [isOpen]);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const isActive = (href: string) => pathname === href;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 shrink-0">
            <Image
              src="/avatar.jpg"
              alt="Abdul Gofur"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          {isOpen && (
            <div className="min-w-0">
              <h2 className="font-bold text-sm truncate">Abdul Gofur</h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">Full-stack Dev</p>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {sidebarItems.map((item) => {
          if (item.children) {
            const isExpanded = expandedItems.includes(item.name);
            const Icon = item.icon;

            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleExpanded(item.name)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 flex-shrink-0" />
                  {isOpen && (
                    <>
                      <span className="flex-1 text-left text-sm">{item.name}</span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </>
                  )}
                </button>

                {isExpanded && isOpen && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer - Toggle Collapse (Desktop only) */}
      {!isMobileOpen && (
        <div className="hidden lg:block p-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 280 : 80 }}
        className="hidden lg:block fixed left-0 top-0 h-screen bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 z-40"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 z-50"
          >
            <SidebarContent />
          </motion.aside>
        </>
      )}
    </>
  );
}
