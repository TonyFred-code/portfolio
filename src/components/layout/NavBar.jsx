import { bool, func } from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/navigationLinks.js";
import useActiveSection from "../../hooks/useActiveSection.jsx";

export default function NavBar({ menuOpen, setMenuOpen }) {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const activeSection = useActiveSection([
    "home",
    "about",
    "contact",
    "projects",
  ]);

  const suppressAutoHideRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);

  function handleNavigating() {
    suppressAutoHideRef.current = true;
    setIsVisible(true);
  }

  useEffect(() => {
    let ticking = false;

    function controlNavBar() {
      if (suppressAutoHideRef.current) {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          suppressAutoHideRef.current = false;
        }, 200);

        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          controlNavBar();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  function isLinkActive(linkPath) {
    const currentPath = location.pathname;

    if (linkPath.startsWith("/#")) {
      const linkHash = linkPath.split("#")[1];

      if (currentPath === "/") {
        return activeSection === linkHash;
      }
      return false;
    }

    return currentPath === linkPath;
  }

  return (
    <nav
      className={`fixed top-0 w-full z-40
    bg-background/10
    backdrop-blur-lg
    border-b border-border/10 transition-transform duration-300
    shadow-sm dark:shadow-lg ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/#home"
            onClick={handleNavigating}
            className="font-mono text-xl font-bold relative text-foreground"
          >
            alfred
            <span className="text-sky-600 dark:text-blue-500">.code</span>
            <span
              className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 
                      bg-blue-500 transition-transform duration-300 hidden md:inline
                      ${location.pathname === "/" && activeSection === "home" ? "scale-x-100" : "scale-x-0"}
                    `}
            />
          </Link>

          <div
            className="
          w-7 h-5 relative cursor-pointer z-40 md:hidden
          text-foreground
        "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((item) => {
              const isActive = isLinkActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavigating}
                  className={`
                    capitalize transition-all relative
                    ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }
                  `}
                >
                  {item.name}
                  <span
                    className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 
                      bg-blue-500 transition-transform duration-300
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  menuOpen: bool,
  setMenuOpen: func,
};
