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
        ["Perfil en inglés", "/andres-felipe-martinez-profile-en.pdf"],
        ["Perfil en español", "/perfil-andres-felipe-martinez-es.pdf"],
      ]
    : [
        ["English profile", "/andres-felipe-martinez-profile-en.pdf"],
        ["Spanish profile", "/perfil-andres-felipe-martinez-es.pdf"],
      ];
}
