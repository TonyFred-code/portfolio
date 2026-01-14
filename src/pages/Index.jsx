import { useRouteLoaderData } from "react-router-dom";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Home from "../components/Home.jsx";
import Projects from "../components/Projects.jsx";

export default function Index() {
  const featuredProjects = useRouteLoaderData("root").filter(
    (proj) => proj.featured
  );

  return (
    <>
      <Home />
      <About />
      <Projects projects={featuredProjects} />
      <Contact />
    </>
  );
}
