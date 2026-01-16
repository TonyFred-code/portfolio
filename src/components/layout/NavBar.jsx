import { bool, func } from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/navigationLinks.js";

export default function NavBar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="
    fixed top-0 w-full z-40
    bg-background/10
    backdrop-blur-lg
    border-b border-border/10
    shadow-sm dark:shadow-lg
  "
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/#home"
            className="
          font-mono text-xl font-bold
          text-foreground
        "
          >
            alfred
            <span className="text-sky-600 dark:text-blue-500">.code</span>
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
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-foreground/70 capitalize transition-colors"
              >
                {item.name}
              </Link>
            ))}
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
