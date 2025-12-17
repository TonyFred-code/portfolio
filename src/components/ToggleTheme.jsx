import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const options = [
  { value: "system", Icon: Laptop, label: "System" },
  { value: "light", Icon: Sun, label: "Light" },
  { value: "dark", Icon: Moon, label: "Dark" },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (theme === "system" && prefersDark)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="
        inline-flex items-center gap-1
        rounded-full border border-slate-200 dark:border-slate-700
        bg-slate-100 dark:bg-slate-800
        p-1
      "
    >
      {options.map((option) => {
        const { value, Icon, label } = option;
        const active = theme === value;

        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(value)}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-full text-sm
              transition-colors
              ${
                active
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }
            `}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
