import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] text-white py-24 px-6"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <p className="text-blue-400 font-semibold text-lg">
          Get To Know
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-2">
          About Me
        </h2>

        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />

      </div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Alisha Kamboj"
            className="w-full max-w-md rounded-3xl border-2 border-blue-500 shadow-[0_0_60px_rgba(37,99,235,0.25)]"
          />

        </motion.div>


        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Frontend & MERN Stack Developer
          </h3>


          {/* INFO CARDS */}

          <div className="grid sm:grid-cols-3 gap-4 mb-8">

            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 text-center">

              <div className="text-3xl mb-3">
                🎓
              </div>

              <h4 className="font-bold">
                Education
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                B.Tech Graduate
              </p>

            </div>


            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 text-center">

              <div className="text-3xl mb-3">
                💻
              </div>

              <h4 className="font-bold">
                Experience
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                4+ Years
              </p>

            </div>


            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 text-center">

              <div className="text-3xl mb-3">
                📍
              </div>

              <h4 className="font-bold">
                Location
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                Delhi, India
              </p>

            </div>

          </div>


          <p className="text-gray-400 leading-8 text-lg">
            Hi, I'm Alisha Kamboj, a Frontend Developer with
            over 4 years of experience building scalable,
            responsive, and high-performance web applications
            using React.js, JavaScript, TypeScript, Redux
            Toolkit, Tailwind CSS, Next.js and REST APIs.
          </p>


          <p className="text-gray-400 leading-8 text-lg mt-5">
            I have worked in the FinTech domain, developing
            Investor Portals, Loan Management Systems, Wallet
            Modules and Portfolio Dashboards. My focus is on
            writing clean, reusable and optimized code while
            delivering an excellent user experience.
          </p>


          <p className="text-gray-400 leading-8 text-lg mt-5">
            I enjoy solving real-world problems through clean
            code, learning new technologies and continuously
            improving my development skills.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default About;