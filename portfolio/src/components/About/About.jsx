import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <img
              src={profile}
              alt="Alisha Kamboj"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-3xl font-semibold mb-6">
              React.js Frontend Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Hi, I'm Alisha Kamboj, a Frontend Developer with over
              4 years of experience building scalable, responsive,
              and high-performance web applications using React.js,
              JavaScript, TypeScript, Redux Toolkit, Tailwind CSS,
              REST APIs, and modern frontend technologies.
            </p>

            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
              I have worked in the FinTech domain, developing Investor
              Portals, Loan Management Systems, Wallet Modules, and
              Portfolio Dashboards. My focus is on writing clean,
              reusable, and optimized code while delivering an excellent
              user experience.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div>
                <h4 className="font-semibold">
                  Experience
                </h4>

                <p>4+ Years</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Location
                </h4>

                <p>Delhi, India</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p>alisha@email.com</p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Freelance
                </h4>

                <p>Available</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;