import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import NavBar from "./components/layout/NavBar.jsx";
import MobileMenu from "./components/layout/MobileMenu.jsx";
import Footer from "./components/layout/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { resolveTheme } from "./helpers/themeUtils.js";
import useTheme from "./hooks/useTheme.jsx";
import ScrollController from "./components/helpers/ScrollController.jsx";
import TopLoader from "./components/helpers/TopLoader.jsx";
import ScrollToTopButton from "./components/helpers/ScrollToTopButton.jsx";

function Root() {
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
      <TopLoader />
      <ScrollController behavior="smooth" />
      <div className={`min-h-screen bg-background text-foreground`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Outlet />
        <Footer />
      </div>
      {!menuOpen && <ScrollToTopButton />}
      <ToastContainer theme={toastTheme} />
    </>
  );
}

export default Root;
