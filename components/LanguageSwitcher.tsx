"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "id" : "en")}
      className="relative w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors group"
      aria-label="Switch language"
      title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
    >
      <Languages className="w-5 h-5" />
      <span className="absolute -bottom-0.5 text-[10px] font-bold">
        {language === "en" ? "EN" : "ID"}
      </span>
    </button>
  );
}
