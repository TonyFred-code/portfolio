import RevealOnScroll from "../RevealOnScroll.jsx";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center -mb-3 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Alfred Faith
          </h1>

          <p className="text-gray-400 text-xl mb-8 max-w-lg mx-auto">
            I build full-stack web applications that just work — thoughtful
            design, solid architecture, and smooth user experiences.
          </p>

          <div className="flex flex-col gap-4 md:flex-row justify-center max-w-3xs md:max-w-none">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
