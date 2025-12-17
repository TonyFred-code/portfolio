import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 rounded-full
        border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        hover:bg-slate-200 dark:hover:bg-slate-700
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-sky-400
      "
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
