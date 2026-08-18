"use client";

import { useEffect, useState } from "react";
import { isLanguage, isTheme, toggleLanguage, toggleTheme } from "../lib/portfolioLogic.mjs";

export type Language = "es" | "en";
export type Theme = "dark" | "light";

export function usePortfolioPreferences() {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("fmv-language");
    const storedTheme = window.localStorage.getItem("fmv-theme");
    if (isLanguage(storedLanguage)) setLanguage(storedLanguage);
    if (isTheme(storedTheme)) setTheme(storedTheme);
  }, []);

  useEffect(() => window.localStorage.setItem("fmv-language", language), [language]);
  useEffect(() => window.localStorage.setItem("fmv-theme", theme), [theme]);

  return {
    language,
    theme,
    toggleLanguage: () => setLanguage(current => toggleLanguage(current)),
    toggleTheme: () => setTheme(current => toggleTheme(current)),
  };
}
