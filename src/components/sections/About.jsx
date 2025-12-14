import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll.jsx";

export default function About() {
  const [showMore, setShowMore] = useState(false);

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

  const previewCourses = courses.slice(0, 3);
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
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent ">
            About Me
          </h2>

          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Crafting scalable web applications and solutions that solve real
              problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl  p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl  p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>

              <ul className="relative border-l-2 border-gray-300 ml-4 list-none text-gray-300">
                <li className="mb-8 ml-4 relative">
                  <span className="absolute left-[-23.5px] top-0 w-3 h-3 bg-blue-500 rounded-full"></span>

                  <p className="font-semibold">
                    B.Tech. in Computer Science - FUTA (2023 - Present)
                  </p>

                  <p className="text-gray-600">
                    Relevant Coursework:{" "}
                    {showMore ? courses.join(", ") : previewCourses.join(", ")}
                    {courses.length > previewCourses.length && (
                      <button
                        className="ml-1 text-blue-500 hover:underline"
                        onClick={() => setShowMore(!showMore)}
                      >
                        {showMore ? "...less" : "...more"}
                      </button>
                    )}
                  </p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Frontend Developer (Volunteer) at GartekCloude (March 2024 -
                    Present)
                  </h4>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Spearheaded the website frontend, translating designs and
                      requirements into a functional, launch-ready product.
                    </li>
                    <li>
                      Provided critical off-hour support, resolving urgent
                      production bugs to ensure platform stability.
                    </li>
                    <li>
                      Collaborated with backend engineers and designers to
                      deliver a cohesive EdTech experience for students.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
