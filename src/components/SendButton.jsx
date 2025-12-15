import {
  CheckIcon,
  Loader,
  PlaneIcon,
  RotateCcw,
  RotateCw,
  Send,
  SendHorizontal,
} from "lucide-react";

function Word({ text, startIndex = 0 }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <span key={i} className="letter" style={{ "--i": startIndex + i }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default function SendButton({ status }) {
  return (
    <button
      type="submit"
      disabled={status === "sending"}
      className="
        w-full h-14 rounded
        bg-blue-500 text-white
        font-semibold tracking-wide
        flex items-center justify-center gap-2
        cursor-pointer
        transition-all
        disabled:opacity-70 disabled:cursor-not-allowed
      "
    >
      {status === "idle" && (
        <>
          <Send />
          <Word text="Send" />
        </>
      )}

      {status === "error" && (
        <>
          <RotateCcw />
          <Word text="Resend" />
        </>
      )}

      {status === "sending" && (
        <>
          <Loader className="icon-send" />
          <span>Sending…</span>
        </>
      )}

      {status === "sent" && (
        <>
          <CheckIcon className="icon-check" />
          <Word text="Sent" startIndex={4} />
        </>
      )}
    </button>
  );
}
