import RevealOnScroll from "../RevealOnScroll.jsx";

export default function About() {
  const courses = [
    "Data Structures",
    "Algorithms",
    "Web Development",
    "Cloud Computing",
    "Database Systems",
    "Operating Systems",
    "Software Engineering",
    "Networks",
  ];
  const frontendSkills = [
    "React",
    "CSS",
    "Typescript",
    "TailwindCSS",
    "HTML",
    "Git & GitHub",
  ];

  const backendSkills = [
    "Node.js",
    "Postman",
    "Express",
    "PostgreSQL",
    "REST API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-primary  to-cyan-500 text-center bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-border/10 border hover:-translate-y-1 transition-all bg-card">
            <p className="text-secondary mb-6">
              Crafting scalable web applications and solutions that solve real
              problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/** Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-card border-border/10">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/** Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-card border-border/10">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  BackEnd
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/** Education */}
            <div className="p-6 rounded-xl border-border/10 border hover:-translate-y-1 transition-all bg-card">
              <h3 className="text-xl font-extrabold  mb-4 text-foreground">
                🏫 Education
              </h3>

              <ul className="relative border-l-2 border-border ml-4 list-none text-secondary">
                <li className="mb-8 ml-4 relative space-y-3">
                  <span className="absolute left-[-23.5px] top-0 w-3 h-3 bg-primary rounded-full"></span>
                  <h4 className="font-semibold text-foreground">
                    B.Tech. in Computer Science - FUTA (2023 - Present)
                  </h4>
                  <p className="text-secondary">
                    Relevant Coursework: {courses.join(", ")}
                  </p>
                </li>
              </ul>
            </div>

            {/** Work Experience */}
            <div className="p-6 rounded-xl border-border/10 border hover:-translate-y-1 transition-all bg-card">
              <h3 className="text-xl font-extrabold mb-4 text-foreground">
                💼 Work Experience
              </h3>
              <div className="space-y-3 text-secondary">
                <h4 className="font-semibold text-foreground">
                  Frontend Developer (Volunteer) at GartekCloude (March 2024 -
                  Present)
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Spearheaded the website frontend, translating designs into
                    functional, launch-ready product.
                  </li>
                  <li>
                    Provided off-hour support, resolving urgent production bugs.
                  </li>
                  <li>
                    Collaborated with backend engineers and designers to deliver
                    cohesive EdTech experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
