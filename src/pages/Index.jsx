import About from "../components/sections/About.jsx";
import Contact from "../components/sections/Contact.jsx";
import Home from "../components/Home.jsx";
import Projects from "../components/sections/Projects.jsx";

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
