import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import { element } from "prop-types";
import { defaultTheme, resolveTheme } from "../helpers/themeUtils.js";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme());

  useEffect(() => {
    const root = document.documentElement;
    const resolvedTheme = resolveTheme(theme);

    root.classList.toggle("dark", resolvedTheme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* React to system changes only when in system mode */
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: element.isRequired,
};
