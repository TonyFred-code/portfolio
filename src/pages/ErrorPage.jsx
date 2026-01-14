import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer.jsx";

export default function Error() {
  return (
    <div className="min-h-screen items-center flex justify-center flex-col">
      <main className="flex-1 flex flex-col items-center justify-center space-y-7">
        <h1 className="flex flex-col gap-2 items-center">
          <span className="text-xs">404</span>
          <span className="text-4xl md:text-6xl capitalize">
            page not found
          </span>
        </h1>
        <p>
          The page you are looking for doesn&apos;t exist or has been removed
        </p>
        <Link
          to={"/"}
          className="uppercase text-primary-foreground bg-primary py-4 px-3 rounded-md font-medium hover:bg-primary/70"
        >
          go home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
