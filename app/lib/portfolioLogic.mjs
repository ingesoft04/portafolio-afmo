export const portfolioAnchors = ["#perfil", "#especialidades", "#experiencia", "#laboratorio", "#proyectos", "#contacto"];

export function toggleLanguage(language) {
  return language === "es" ? "en" : "es";
}

export function toggleTheme(theme) {
  return theme === "dark" ? "light" : "dark";
}

export function isLanguage(value) {
  return value === "es" || value === "en";
}

export function isTheme(value) {
  return value === "dark" || value === "light";
}

export function documentLinks(language) {
  return language === "es"
    ? [
        ["Hoja de vida en inglés", "/andres-felipe-martinez-profile-en.pdf"],
        ["Hoja de vida en español", "/perfil-andres-felipe-martinez-es.pdf"],
      ]
    : [
        ["English résumé", "/andres-felipe-martinez-profile-en.pdf"],
        ["Spanish résumé", "/perfil-andres-felipe-martinez-es.pdf"],
      ];
}
