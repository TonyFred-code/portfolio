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

function defaultTheme() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (stored === "dark" || (!stored && prefersDark)) {
    return "dark";
  }

  return "light";
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(defaultTheme());

  // Apply theme to root
  useEffect(() => {
    const root = document.documentElement;

    // TODO: add system theme preference logic

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Determine toast theme
  const toastTheme = theme === "light" ? "light" : "dark";

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
