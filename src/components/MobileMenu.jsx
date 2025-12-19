export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-background/10 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {["Home", "About", "Projects", "Contact"].map((link) => {
        return (
          <a
            onClick={() => setMenuOpen(false)}
            href={`#${link.toLowerCase()}`}
            key={link}
            className={`text-2xl font-semibold text-foreground my-4 transform transition-transform duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "translate-y-5 opacity-0"
            }`}
          >
            {link}
          </a>
        );
      })}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-foreground text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
    </div>
  );
}
