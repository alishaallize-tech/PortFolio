import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#030712] text-white py-24 px-6"
    >

      <div className="text-center mb-16">

        <p className="text-blue-400 font-semibold text-lg">
          My Expertise
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-2">
          Skills
        </h2>

        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />

      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {skills.map((skill, index) => (

          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            className="min-h-[210px] bg-[#0b101b] border border-gray-800 rounded-3xl flex flex-col items-center justify-center hover:-translate-y-2 hover:border-blue-500/50 transition duration-300"
          >

            <div
              className={`text-6xl ${skill.color} mb-6`}
            >
              {skill.icon}
            </div>

            <h3 className="font-bold text-lg">
              {skill.name}
            </h3>

            <div className="w-10 h-1 bg-blue-600 rounded-full mt-6" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;