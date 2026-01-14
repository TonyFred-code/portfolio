import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import NavBar from "./components/NavBar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { resolveTheme } from "./helpers/themeUtils.js";
import useTheme from "./hooks/useTheme.jsx";
import ScrollToHashElement from "./components/ScrollToHashElement.jsx";
import NavigationBar from "./components/TopLoader.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const toastTheme = resolveTheme(theme);

  const [showLoader, setShowLoader] = useState(() => {
    const hasShown = sessionStorage.getItem("loaderShown");
    return !hasShown;
  });

  function handleLoaderComplete() {
    sessionStorage.setItem("loaderShown", "true");
    setShowLoader(false);
  }

  if (showLoader) {
    return <LoadingScreen onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <NavigationBar />
      <ScrollToHashElement behavior="smooth" />
      <div className={`min-h-screen bg-background text-foreground`}>
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
