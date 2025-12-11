"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === "en" ? "ID" : "EN"}
      </span>
    </button>
  );
}
