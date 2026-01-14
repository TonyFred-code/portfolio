import { Link, useRouteLoaderData } from "react-router-dom";

export default function Showcase() {
  const projects = useRouteLoaderData("root");

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div>
        <h1>My Projects</h1>
        <Link to={"/"}>Go back home</Link>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.projectName}>
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
