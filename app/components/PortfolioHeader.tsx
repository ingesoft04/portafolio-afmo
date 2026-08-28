"use client";

import { useEffect, useState } from "react";
import type { Language, Theme } from "../hooks/usePortfolioPreferences";
import { portfolioAnchors } from "../lib/portfolioLogic.mjs";


interface PortfolioHeaderProps {
  language: Language;
  theme: Theme;
  navigation: string[];
  onLanguageChange: () => void;
  onThemeChange: () => void;
}

export function PortfolioHeader({ language, theme, navigation, onLanguageChange, onThemeChange }: PortfolioHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? (language === "es" ? "blanco" : "light") : (language === "es" ? "negro" : "dark");
  const logo = theme === "dark" ? "/fmv-logo-white-transparent.png" : "/fmv-logo-graphite-transparent.png";
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="nav">
    <a className="brand brand-logo" href="#top"><img src={logo} alt="FMV InfraSec"/><b>Andrés Martínez</b></a>
    <button className={`nav-scrim ${menuOpen ? "is-open" : ""}`} aria-label={language === "es" ? "Cerrar menú" : "Close menu"} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}/>
    <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
      <div className="nav-drawer-head"><span>{language === "es" ? "NAVEGACIÓN" : "NAVIGATION"}</span><button onClick={() => setMenuOpen(false)} aria-label={language === "es" ? "Cerrar menú" : "Close menu"}>×</button></div>
      {navigation.map((item, index) => <a key={item} href={portfolioAnchors[index]} onClick={() => setMenuOpen(false)}>{item}</a>)}
    </nav>
    <div className="controls">
      <button className="theme-toggle" onClick={onThemeChange} aria-label={`${language === "es" ? "Cambiar a modo" : "Switch to"} ${nextTheme}`} title={nextTheme}><span aria-hidden="true">{theme === "dark" ? "○" : "●"}</span>{nextTheme.toUpperCase()}</button>
      <button className="lang" onClick={onLanguageChange} aria-label={language === "es" ? "Cambiar a inglés" : "Switch to Spanish"}>{language.toUpperCase()} <span>↗</span></button>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(value => !value)}><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>{language === "es" ? "MENÚ" : "MENU"}</button>
    </div>
  </header>;
}
