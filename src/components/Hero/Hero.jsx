import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../../assets/Alisha.jpg";

function Hero() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // const scrollToProjects = () => {
  //   document
  //     .getElementById("projects")
  //     ?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  // };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-70px)] bg-[#030712] text-white flex items-center px-6 py-20 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* Welcome */}

          <div className="inline-flex items-center border border-blue-500/60 bg-blue-500/10 text-blue-400 px-5 py-2.5 rounded-full mb-8">
            👋 Welcome to my Portfolio
          </div>


          {/* Heading */}

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[1.05]">

            Hi, I'm

            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Alisha Kamboj
            </span>

          </h1>


          {/* Role */}

          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mt-8">
          Full Stack Developer | React.js Specialist | Micro Frontends
          </h2>


          {/* Description */}

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-2xl">

          Frontend Developer with Full Stack experience and 5 years of experience building scalable, responsive, and high-performance applications using React.js, JavaScript, TypeScript, Next.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, REST APIs, and Micro Frontend architecture. 
          </p>
          <p className="text-gray-400 leading-8 text-lg mt-5">
          Experienced in developing solutions across the FinTech and Telecom domains, including Investor Portals, Loan Management Systems, Wallet Modules, Portfolio Dashboards, and Telecom Management Systems. Contributed to building scalable web applications for telecom and aerial communication platforms, with a focus on clean, reusable, optimized, and user-friendly solutions.

            </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            {/* <button
              onClick={scrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition hover:-translate-y-1 shadow-lg shadow-blue-600/20"
            >
              View Projects
            </button> */}

         <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition hover:-translate-y-1 shadow-lg shadow-blue-600/20"
            >
              Contact Me
            </button>
            <a
              href="/AlishaResume.pdf"
              download="AlishaResume.pdf"
              className="border border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-full font-bold transition hover:-translate-y-1"
            >
              Download Resume
            </a>

          </div>


          {/* Social */}

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>


          {/* Stats */}

          <div className="flex gap-12 mt-12">

            <div>
              <h3 className="text-3xl font-extrabold text-blue-400">
                5
              </h3>

              <p className="text-gray-400 mt-1">
                Years Experience
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-extrabold text-blue-400">
                10+
              </h3>

              <p className="text-gray-400 mt-1">
                Technologies
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-extrabold text-blue-400">
                Open
              </h3>

              <p className="text-gray-400 mt-1">
                To Work
              </p>
            </div>

          </div>

        </motion.div>


        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center min-h-[500px]"
        >

          {/* Glow */}

          <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-3xl" />


          {/* Profile */}

          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full p-1 bg-gradient-to-br from-blue-400 to-cyan-400 shadow-[0_0_80px_rgba(37,99,235,0.35)]">

            <img
              src={profile}
              alt="Alisha Kamboj"
              className="w-full h-full object-cover rounded-full border-8 border-[#030712]"
            />

          </div>


          {/* React */}

          <div className="absolute top-12 left-4 md:left-16 bg-[#0f172a] border border-cyan-500/50 px-5 py-3 rounded-full shadow-xl">
            ⚛️ React
          </div>
   {/* next.js */}
   <div className="absolute left-4 md:left-24 bottom-4 bg-[#0f172a] border border-gray-500/50 px-5 py-3 rounded-full shadow-xl">
  ▲ Next.js
</div>

          {/* Node */}

          <div className="absolute right-0 md:right-4 top-1/2 bg-[#0f172a] border border-green-500/50 px-5 py-3 rounded-full shadow-xl">
            🟢 Node.js
          </div>


          {/* Mongo */}

          <div className="absolute left-0 md:left-10 bottom-20 bg-[#0f172a] border border-green-500/50 px-5 py-3 rounded-full shadow-xl">
            🍃 MongoDB
          </div>


          {/* JavaScript */}

          <div className="absolute right-8 bottom-8 bg-[#0f172a] border border-yellow-500/50 px-5 py-3 rounded-full shadow-xl">
            💛 JavaScript
          </div>

         
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;