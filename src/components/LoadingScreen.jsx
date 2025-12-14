import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const fullText = "<Hello World />";

  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | filling | done
  const [fadeOut, setFadeOut] = useState(false);

  /* ---------------- Typing phase ---------------- */
  useEffect(() => {
    if (phase !== "typing") return;

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setPhase("filling");
      }
    }, 80);

    return () => clearInterval(interval);
  }, [phase]);

  /* ---------------- Filling phase ---------------- */
  useEffect(() => {
    if (phase !== "filling") return;

    const duration = Math.floor(Math.random() * 401) + 300;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);

      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setFadeOut(true);
        }, 300);
      }
    }

    requestAnimationFrame(update);
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
        fixed inset-0 z-50 bg-black
        flex flex-col items-center justify-center gap-6
        transition-opacity duration-400
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <h1
        className="
          text-5xl font-bold font-mono
          text-transparent bg-clip-text
          bg-linear-to-r from-blue-400 via-cyan-500 to-pink-600
          bg-no-repeat
        "
        style={{
          backgroundSize:
            phase === "filling" || fadeOut ? `${progress}% 100%` : "0% 100%",
        }}
      >
        {text}
      </h1>

      <span className="text-sm text-blue-500 tracking-wide">
        {Math.floor(progress)}%
      </span>

      <div className="w-64 h-0.5 bg-gray-800 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
