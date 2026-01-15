function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

function defaultTheme() {
  return localStorage.getItem("theme") || "system";
}

export { defaultTheme, resolveTheme, getSystemTheme };
