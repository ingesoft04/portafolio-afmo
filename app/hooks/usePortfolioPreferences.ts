"use client";

import { useSyncExternalStore } from "react";
import { isLanguage, isTheme, toggleLanguage, toggleTheme } from "../lib/portfolioLogic.mjs";

export type Language = "es" | "en";
export type Theme = "dark" | "light";

const PREFERENCES_EVENT = "fmv-preferences-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(PREFERENCES_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(PREFERENCES_EVENT, onStoreChange);
  };
}

function getLanguageSnapshot(): Language {
  const storedLanguage = window.localStorage.getItem("fmv-language");
  return isLanguage(storedLanguage) ? storedLanguage : "es";
}

function getThemeSnapshot(): Theme {
  const storedTheme = window.localStorage.getItem("fmv-theme");
  return isTheme(storedTheme) ? storedTheme : "dark";
}

function notifyPreferenceChange() {
  window.dispatchEvent(new Event(PREFERENCES_EVENT));
}

export function usePortfolioPreferences() {
  const language = useSyncExternalStore(subscribe, getLanguageSnapshot, () => "es");
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "dark");

  return {
    language,
    theme,
    toggleLanguage: () => {
      window.localStorage.setItem("fmv-language", toggleLanguage(language));
      notifyPreferenceChange();
    },
    toggleTheme: () => {
      window.localStorage.setItem("fmv-theme", toggleTheme(theme));
      notifyPreferenceChange();
    },
  };
}
