import ToggleTheme from "./ToggleTheme.jsx";

export default function Footer() {
  return (
    <footer className="text-xs text-gray-300 flex items-center justify-center py-3 gap-2">
      <p>© {new Date().getFullYear()} Alfred Faith</p>
      <ToggleTheme />
    </footer>
  );
}
