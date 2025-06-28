import { motion } from "motion/react";
import { LucideTwitter, Facebook, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative  overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute   inset-0 z-0  bg-repeat bg-center opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div className="max-w-xl space-y-6 md:text-start sm:text-center">
          <h1
            className="font-dillan text-7xl font-extrabold"
            style={{ WebkitTextStroke: "2.5px black" }}
          >
            I'm Söyeb Islam
          </h1>
          <p className="font-inter font-semibold text-[#008236]">
            Full Stack Developer
          </p>
          <p className="text-gray-700">
            Passionate about building modern web applications with a focus on
            performance and user experience.
          </p>

          {/* Resume Button */}
          <a
            href="/soyeb.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block mt-4 bg-[#008236] text-white px-6 py-2 rounded shadow hover:bg-[#006622] transition"
          >
            Download Resume
          </a>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-[#008236] text-3xl">
            <a
              href="https://github.com/soyebcodes"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/md-soyeb-islam-285a00363/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/soyebislam_1"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <LucideTwitter />
            </a>
            <a
              href="https://web.facebook.com/shoaib.5782/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <img
          src="/undraw_developer-avatar.svg"
          alt="Md. Soyeb Islam"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;
