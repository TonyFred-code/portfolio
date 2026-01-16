import { useRouteLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import RevealOnScroll from "../components/helpers/RevealOnScroll.jsx";

export default function Showcase() {
  const projects = useRouteLoaderData("root");

  // TODO:
  // add backend projects and full stack projects [when built :( ]
  // add logic for filtering by tech used
  // add logic for filtering by project type (Personal, Academic, Client,Contract, Experiment etc.)

  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <RevealOnScroll>
        <div className="px-4 flex flex-col items-center max-w-5xl mx-auto gap-10">
          <header className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Project Showcase</h1>
            <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
              A curated collection of projects I&apos;ve built, exploring
              frontend architecture, performance, and user experience.
            </p>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const {
                projectName,
                projectDescription,
                techUsed,
                demoLink,
                sourceCodeLink,
                featured,
              } = project;
              return (
                <ProjectCard
                  key={`${projectName.toLowerCase()}:index${index}`}
                  projectName={projectName}
                  projectDescription={projectDescription}
                  techUsed={techUsed}
                  demoLink={demoLink}
                  sourceCodeLink={sourceCodeLink}
                  featured={featured}
                />
              );
            })}
          </main>
        </div>
      </RevealOnScroll>
    </section>
  );
}
