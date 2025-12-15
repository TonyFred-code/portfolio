import { CheckIcon, Loader, RotateCcw, Send } from "lucide-react";
import FORM_CONSTANTS from "../constants/form-status.js";

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
      disabled={status === FORM_CONSTANTS.SENDING}
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
      {status === FORM_CONSTANTS.IDLE && (
        <>
          <Send />
          <Word text="Send" />
        </>
      )}

      {status === FORM_CONSTANTS.FAILED && (
        <>
          <RotateCcw />
          <Word text="Resend" />
        </>
      )}

      {status === FORM_CONSTANTS.SENDING && (
        <>
          <Loader className="icon-send" />
          <span>Sending...</span>
        </>
      )}

      {status === FORM_CONSTANTS.SENT && (
        <>
          <CheckIcon className="icon-check" />
          <Word text="Sent" startIndex={4} />
        </>
      )}
    </button>
  );
}
