import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import NavBar from "./components/NavBar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import useProjects from "./hooks/useProjects.jsx";
import { Outlet } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";
import { resolveTheme } from "./helpers/themeUtils.js";
import useTheme from "./hooks/useTheme.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { loading, error } = useProjects();

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

  const shouldShowLoader = loading || !isLoaded;
  const toastTheme = resolveTheme(theme);

  if (error) return <div>An error occurred: {error}</div>;

  return (
    <>
      <ScrollToHashElement behavior="smooth" />
      {shouldShowLoader && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700
          ${!shouldShowLoader ? "opacity-100" : "opacity-0"}
          bg-background text-foreground
        `}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Outlet />
        <Footer />
      </div>

      <ToastContainer theme={toastTheme} />
    </>
  );
}

export default App;
