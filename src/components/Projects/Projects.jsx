import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Gallery App",
    description:
      "A modern image gallery application built with a responsive user interface and full-stack functionality.",
    image: "/gallery-project.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Tcongs - Digital Business Platform",
    description:
      "A modern and responsive digital business platform focused on creating premium web experiences.",
    image: "/tcongs-project.png",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Hotel Listing",
    description:
      "A full-stack hotel listing platform featuring hotel listings, detailed property views and dynamic server-side rendering.",
    image: "/hotel-project.png",
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
    ],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#030712] text-white py-24 px-6"
    >

      <div className="text-center mb-16">

        <p className="text-blue-400 font-semibold text-lg">
          My Work
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-2">
          Featured Projects
        </h2>

        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />

        <p className="text-gray-400 mt-8 text-lg">
          Here are some of the projects I have built using
          modern web technologies.
        </p>

      </div>


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="overflow-hidden bg-[#0b101b] border border-gray-800 rounded-3xl hover:-translate-y-2 hover:border-blue-500/50 transition duration-300"
          >

            {/* IMAGE */}

            <div className="h-60 overflow-hidden bg-black">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </div>


            {/* CONTENT */}

            <div className="p-7">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>


              <p className="text-gray-400 leading-7 mt-4">
                {project.description}
              </p>


              {/* TECHNOLOGIES */}

              <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map(
                  (technology) => (

                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full text-sm text-blue-400 border border-blue-500/40 bg-blue-500/5"
                    >
                      {technology}
                    </span>

                  )
                )}

              </div>


              {/* BUTTONS */}

              <div className="flex gap-3 mt-7">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-700 hover:border-blue-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>


                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;