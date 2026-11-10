export type PortfolioLanguage = "es" | "en";
export type PortfolioTheme = "dark" | "light";

export const portfolioAnchors: readonly string[];
export const documentLinks: (language: PortfolioLanguage) => Array<[string, string]>;
export const isLanguage: (value: unknown) => value is PortfolioLanguage;
export const isTheme: (value: unknown) => value is PortfolioTheme;
export const toggleLanguage: (language: PortfolioLanguage) => PortfolioLanguage;
export const toggleTheme: (theme: PortfolioTheme) => PortfolioTheme;
