"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log("ThemeToggle mounted:", { theme, resolvedTheme });
  }, []);

  useEffect(() => {
    console.log("Theme changed:", { theme, resolvedTheme });
  }, [theme, resolvedTheme]);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Current: {resolvedTheme}</span>
    </button>
  );
}
