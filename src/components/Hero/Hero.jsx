import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0}}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Alisha <br />
            <span className="text-blue-600">Kamboj</span>
          </h1>

          <h2 className="text-2xl mt-5 text-gray-700 font-semibold">
            React.js Frontend Developer
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-lg">
            Passionate Frontend Developer with 4+ years of experience
            building responsive, scalable, and high-performance web
            applications using React.js, JavaScript, TypeScript,
            Redux Toolkit, Tailwind CSS, Next.Js and REST APIs.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Download Resume
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Contact Me
            </button>
          </div>

          <div className="flex gap-5 mt-8 text-3xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Alisha Kamboj"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-blue-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;