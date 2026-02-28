import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#050510] text-[#b0b0b0]" id="c5">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
        Contact Me
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-3xl text-center mx-auto leading-relaxed">
        I’m always open to discussing new projects, creative ideas, or opportunities 
        to be part of your vision. Feel free to reach out through any of the following channels.
      </p>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-12">

        {/* Email & Phone */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl border border-[#601cfc]/40 
                        hover:border-[#601cfc] hover:shadow-lg hover:shadow-[#601cfc]/30
                        transition duration-300">

          <h3 className="text-xl font-semibold text-white mb-6">
            Get in Touch
          </h3>

          <div className="space-y-4">
            <a 
              href="mailto:wbenabbes05@gmail.com"
              className="flex items-center gap-3 bg-[#1a1a2e] hover:bg-[#601cfc] 
                         px-5 py-3 rounded-lg transition duration-300"
            >
              <MdEmail className="text-xl" />
              <span>Email Me</span>
            </a>

            <a 
              href="tel:+213666522392"
              className="flex items-center gap-3 bg-[#1a1a2e] hover:bg-[#601cfc] 
                         px-5 py-3 rounded-lg transition duration-300"
            >
              <MdPhone className="text-xl" />
              <span>Call Me</span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl border border-[#601cfc]/40 
                        hover:border-[#601cfc] hover:shadow-lg hover:shadow-[#601cfc]/30
                        transition duration-300">

          <h3 className="text-xl font-semibold text-white mb-6">
            Social Media
          </h3>

          <div className="space-y-4">
            <a 
              href="https://github.com/wbenabbes05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a1a2e] hover:bg-[#601cfc] 
                         px-5 py-3 rounded-lg transition duration-300"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/wassim-benabbes-8a2b43236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1a1a2e] hover:bg-[#601cfc] 
                         px-5 py-3 rounded-lg transition duration-300"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Download CV */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl border border-[#601cfc]/40 
                        hover:border-[#601cfc] hover:shadow-lg hover:shadow-[#601cfc]/30
                        transition duration-300">

          <h3 className="text-xl font-semibold text-white mb-6">
            Download CV
          </h3>

          <a 
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-3 
                       bg-[#601cfc] hover:bg-[#601cfc]/80 
                       text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}