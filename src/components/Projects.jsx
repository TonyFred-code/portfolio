import RevealOnScroll from "./helpers/RevealOnScroll.jsx";
import { array } from "prop-types";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects({ projects }) {
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
                <ProjectCard
                  key={projectName.toLowerCase()}
                  projectName={projectName}
                  projectDescription={projectDescription}
                  techUsed={techUsed}
                  demoLink={demoLink}
                  sourceCodeLink={sourceCodeLink}
                />
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

Projects.propTypes = {
  projects: array.isRequired,
};
