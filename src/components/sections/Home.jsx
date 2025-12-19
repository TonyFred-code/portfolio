import RevealOnScroll from "../RevealOnScroll.jsx";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center -mb-10 md:mb-0">
          <h1
            className="
      text-5xl md:text-7xl font-bold mb-6 leading-tight
      text-transparent bg-clip-text
      bg-linear-to-r
      from-primary via-cyan-500 to-primary
    "
          >
            Hi, I'm Alfred Faith
          </h1>

          <p className="text-secondary text-xl mb-8 max-w-lg mx-auto">
            I build full-stack web applications that <em>just works</em> —
            thoughtful design, solid architecture, and smooth user experiences.
          </p>

          <div className="flex flex-col gap-4 md:flex-row justify-center max-w-3xs md:max-w-none">
            <a
              href="#projects"
              className="
        bg-primary text-primary-foreground
        py-3 px-6 rounded font-medium
        transition relative overflow-hidden
        hover:bg-primary/80
        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]
        dark:hover:shadow-[0_0_5px_rgba(34,211,238,0.4)]
      "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
        border border-primary/50 text-primary
        py-3 px-6 rounded font-medium
        transition-all duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_0_15px_rgba(14,165,233,0.2
        hover:bg-primary/10
        dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.2
      "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
