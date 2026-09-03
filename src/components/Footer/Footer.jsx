import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <footer className="bg-[#030712] text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* ================= ABOUT ================= */}

          <div>

            <h3 className="text-3xl font-extrabold">
              Alisha
              <span className="text-blue-500">.</span>
            </h3>

            <p className="text-gray-400 text-lg leading-8 mt-6 max-w-md">
              Frontend Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h4 className="text-lg font-bold tracking-wide">
              QUICK LINKS
            </h4>

            <div className="flex flex-col gap-4 mt-7">

              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-blue-400 transition text-left"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-blue-400 transition text-left"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-400 hover:text-blue-400 transition text-left"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-400 hover:text-blue-400 transition text-left"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-blue-400 transition text-left"
              >
                Contact
              </button>

            </div>

          </div>


          {/* ================= CONNECT ================= */}

          <div>

            <h4 className="text-lg font-bold tracking-wide">
              CONNECT
            </h4>

            <p className="text-gray-400 text-lg leading-8 mt-7">
              Feel free to connect with me or reach out for
              opportunities and collaborations.
            </p>


            <div className="flex gap-4 mt-7">

              <a
                href="https://github.com/alishaallize-tech"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
              >
                <FaGithub className="text-xl" />
              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>


              <button
                onClick={scrollToTop}
                className="w-14 h-14 border border-gray-800 rounded-xl flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition"
                aria-label="Back to top"
              >
                <FaArrowUp className="text-xl" />
              </button>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Alisha Kamboj.
            All rights reserved.
          </p>

          {/* <p className="text-gray-500">
            Built with{" "}
            <span className="text-white font-semibold">
              React
            </span>{" "}
            &{" "}
            <span className="text-white font-semibold">
              Tailwind CSS
            </span>
          </p> */}

        </div>

      </div>

    </footer>
  );
}

export default Footer;