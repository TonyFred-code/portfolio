import { ExternalLink } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll.jsx";

export default function Projects() {
  const projects = [
    {
      projectName: "Emoji Flipper",
      projectDescription: "A fun emoji flipping game built with React and Vite",
      techUsed: ["React", "Vite"],
      demoLink: "https://top-project-memory-card.vercel.app/",
      sourceCodeLink: "https://github.com/TonyFred-code/project-memory-card",
    },
    {
      projectName: "Intelligent CV",
      projectDescription:
        "This is a React-based application that allows users to input their information and generate a CV/résumé.",
      techUsed: ["React", "Vite"],
      demoLink: "https://intelligent-cv-generator.vercel.app/",
      sourceCodeLink: "https://github.com/TonyFred-code/project-cv-generator",
    },

    {
      projectName: "Fruit Era",
      projectDescription:
        "A demo e-commerce shopping cart built with React and Vite, featuring cart state management and component testing with React Testing Library.",
      techUsed: ["React", "RTL", "Vite"],
      demoLink: "https://project-shopping-cart-gray.vercel.app/",
      sourceCodeLink: "https://github.com/TonyFred-code/project-shopping-cart",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-primary to-cyan-500 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const {
                projectName,
                projectDescription,
                techUsed,
                demoLink,
                sourceCodeLink,
              } = project;
              return (
                <div
                  key={projectName.toLowerCase()}
                  className="p-6 rounded-xl border border-border/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition flex flex-col bg-card"
                >
                  <h3 className="text-xl font-bold mb-2">{projectName}</h3>
                  <p className="text-secondary mb-4 grow">
                    {projectDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techUsed.map((tech, key) => {
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

                  <div className="flex justify-end gap-3 items-center">
                    <a
                      href={demoLink}
                      target="_blank"
                      aria-label="Open live demo in a new tab"
                      title="Open live demo"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-colors text-foreground hover:text-foreground/30"
                    >
                      <ExternalLink aria-hidden={true} />
                    </a>
                    <a
                      href={sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-colors text-foreground hover:text-foreground/30"
                      aria-label="Open project source code demo in a new tab"
                      title="Open source code"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 fill-foreground hover:fill-foreground/50 transition"
                        aria-hidden={true}
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
