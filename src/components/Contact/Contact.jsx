import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#030712] text-white py-24 px-6"
    >
      {/* ================= HEADER ================= */}

      <div className="text-center max-w-4xl mx-auto">

        <p className="text-blue-400 font-semibold text-lg">
          Get In Touch
        </p>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-2">
          Let's Work Together
        </h2>

        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />

        <p className="text-gray-400 text-lg leading-8 mt-8">
          Have a project in mind or looking for a developer?
          Feel free to reach out. I'm always open to discussing
          new opportunities and interesting ideas.
        </p>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 mt-16">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b101b] border border-gray-800 rounded-3xl p-8 md:p-10"
        >

          <h3 className="text-3xl font-bold">
            Let's Connect
          </h3>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            I'm currently looking for opportunities where I can
            use my frontend and full-stack development skills
            to build useful and modern web applications.
          </p>


          {/* EMAIL */}

          <div className="flex items-center gap-5 border border-gray-800 bg-[#0f1420] rounded-2xl p-5 mt-10">

            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <FaEnvelope className="text-blue-400 text-xl" />
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Email
              </p>

              <a
                href="mailto:alishakamboj0909@gmail.com"
                className="text-white font-semibold text-lg hover:text-blue-400 transition"
              >
                alishakamboj0909@gmail.com
              </a>
            </div>

          </div>


          {/* LOCATION */}

          <div className="flex items-center gap-5 border border-gray-800 bg-[#0f1420] rounded-2xl p-5 mt-5">

            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Location
              </p>

              <p className="text-white font-semibold text-lg">
                Delhi, India
              </p>
            </div>

          </div>


          {/* SOCIAL */}

          <div className="mt-10">

            <p className="text-gray-500 mb-5">
              Find me online
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/alishaallize-tech"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:border-blue-500 hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:border-blue-500 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </motion.div>


        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b101b] border border-gray-800 rounded-3xl p-8 md:p-10"
        >

          <h3 className="text-3xl font-bold">
            Send Me a Message
          </h3>


          <form
            action="mailto:YOUR_EMAIL@gmail.com"
            method="POST"
            encType="text/plain"
            className="mt-8"
          >

            {/* NAME */}

            <div>
              <label className="block text-gray-300 font-semibold mb-3">
                Your Name
              </label>

              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
                className="w-full bg-[#080c14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition"
              />
            </div>


            {/* EMAIL */}

            <div className="mt-6">

              <label className="block text-gray-300 font-semibold mb-3">
                Email Address
              </label>

              <input
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
                className="w-full bg-[#080c14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition"
              />

            </div>


            {/* MESSAGE */}

            <div className="mt-6">

              <label className="block text-gray-300 font-semibold mb-3">
                Message
              </label>

              <textarea
                name="Message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-[#080c14] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition resize-none"
              />

            </div>


            {/* SEND BUTTON */}

            <button
              type="submit"
              className="w-full mt-7 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;