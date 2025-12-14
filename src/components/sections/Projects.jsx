import RevealOnScroll from "../RevealOnScroll.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Emoji Flipper</h3>
              <p className="text-gray-400 mb-4">
                A fun emoji flipping game built with React and Vite.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between  items-center">
                <a
                  href="https://top-project-memory-card.vercel.app/"
                  target="__blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Intelligent CV</h3>
              <p className="text-gray-400 mb-4">
                This is a React-based application that allows users to input
                their information and generate a CV/résumé.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between  items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Fruit Era</h3>
              <p className="text-gray-400 mb-4">
                A demo e-commerce shopping cart built with React and Vite,
                featuring cart state management and component testing with React
                Testing Library.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "RTL", "Vite"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex justify-between  items-center">
                <a
                  href="https://project-shopping-cart-gray.vercel.app/"
                  target="__blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
