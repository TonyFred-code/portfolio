import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import NavBar from "./components/NavBar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";

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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toastTheme = resolveTheme(theme);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700
          ${isLoaded ? "opacity-100" : "opacity-0"}
          bg-background text-foreground
        `}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer setTheme={setTheme} currentTheme={theme} />
      </div>

      <ToastContainer theme={toastTheme} />
    </>
  );
}

export default App;
