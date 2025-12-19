import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll.jsx";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import SendButton from "../SendButton.jsx";
import { toast } from "react-toastify";
import FORM_STATUS from "../../constants/form-status.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(FORM_STATUS.IDLE);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(FORM_STATUS.SENDING);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY,
        }
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!", { closeOnClick: true });
        setStatus(FORM_STATUS.SENT);
      })
      .catch((e) => {
        const errorMsg = e?.message
          ? `Error: ${e.message}`
          : "An unexpected error occurred.";
        toast.error(
          `${errorMsg}.\nPlease check your internet connection and try again.`,
          {
            closeOnClick: true,
          }
        );
        setStatus(FORM_STATUS.FAILED);
      })
      .finally(() => {
        setTimeout(() => setStatus(FORM_STATUS.IDLE), 2000);
      });
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-primary to-cyan-400 text-center bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6 w-4/5 max-w-150" onSubmit={handleSubmit}>
            <input type="hidden" name="to_name" value="Alfred O. Faith" />
            <input
              type="hidden"
              name="time"
              value={format(new Date(), "EEEE, MMMM do, yyyy 'at' HH:mm:ss")}
            />
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                className="w-full bg-card/80 border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-blue-500/5 placeholder:text-secondary/50"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-card/80 border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-blue-500/5 placeholder:text-secondary/50"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-card/80 border border-border rounded px-4 py-3 text-foreground transition focus:outline-none focus:border-primary focus:bg-blue-500/5 placeholder:text-secondary/50"
                placeholder="Your Message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <SendButton status={status} />
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
