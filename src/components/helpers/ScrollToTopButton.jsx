import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showScrollToTopBtn, setShowToTopBtn] = useState(false);

  useEffect(() => {
    function handleShowScrollBtn() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate distance from bottom of page
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (scrollTop > 50 && distanceFromBottom > 50) {
        setShowToTopBtn(true);
      } else {
        setShowToTopBtn(false);
      }
    }

    window.addEventListener("scroll", handleShowScrollBtn);

    return () => window.removeEventListener("scroll", handleShowScrollBtn);
  }, []);

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showScrollToTopBtn ? (
        <button
          type="button"
          className="fixed z-50 bottom-4 right-4 rounded-md bg-primary text-primary-foreground border-none p-1.5 cursor-pointer hover:bg-primary/70 hover:scale-105"
          onClick={scrollToTop}
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </>
  );
}
