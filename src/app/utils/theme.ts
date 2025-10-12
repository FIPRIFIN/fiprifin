export type Theme = "light" | "dark" | "calm" | "tech";

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("verosoma-theme", theme);
}

export function getSavedTheme(): Theme {
  return (localStorage.getItem("verosoma-theme") as Theme) || "dark";
}
