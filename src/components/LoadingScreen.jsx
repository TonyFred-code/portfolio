import { useEffect, useState } from "react";
import { func } from "prop-types";
import randomInteger from "../helpers/randomInteger.js";
import TextType from "./helpers/TextType.jsx";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | filling | done
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (phase !== "filling") return;

    let rafId;
    let start = performance.now();

    // filling config
    const fillDuration = randomInteger(300, 600);

    function tick(now) {
      const elapsed = now - start;

      const pct = Math.min((elapsed / fillDuration) * 100, 100);
      setProgress(pct);

      if (pct === 100) {
        setTimeout(() => setFadeOut(true), 300);
        return; // stop loop
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  /* ---------------- Exit phase ---------------- */
  useEffect(() => {
    if (!fadeOut) return;

    const timeout = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 400);

    return () => clearTimeout(timeout);
  }, [fadeOut, onComplete]);

  return (
    <div
      className={`
    fixed inset-0 z-50
    bg-background
    flex flex-col items-center justify-center gap-6
    transition-opacity duration-400
    ${fadeOut ? "opacity-0" : "opacity-100"}
  `}
    >
      <h1
        className="text-3xl md:text-5xl font-bold font-mono text-center
      text-transparent bg-clip-text
      bg-no-repeat bg-linear-to-r from-primary via-cyan-500 to-primary bg-foreground"
        style={{
          backgroundSize:
            phase === "filling" || fadeOut ? `${progress}% 100%` : "0% 100%",
        }}
      >
        <TextType
          text={"<Hello World />"}
          loop={false}
          cursorCharacter="_"
          cursorClassName={`${phase === "typing" ? "text-foreground" : "text-primary"}`}
          typingSpeed={75}
          onSentenceComplete={() => setPhase("filling")}
        />
      </h1>

      <span
        className={`${phase === "filling" ? "text-primary" : "text-foreground"} text-sm  tracking-wide`}
      >
        {Math.floor(progress)}%
      </span>

      <div className="w-64 h-0.5 bg-foreground/30 rounded overflow-hidden">
        <div
          className="
        h-full
        bg-primary
        shadow-[0_0_12px_#0ea5e9]
        dark:shadow-[0_0_12px_#38bdf8]
      "
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

LoadingScreen.propTypes = {
  onComplete: func.isRequired,
};
