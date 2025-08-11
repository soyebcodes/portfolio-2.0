import { motion } from "motion/react";
import { LucideTwitter, Facebook, Linkedin, Github } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden"
    >
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6 text-center md:text-start sm:text-center lg:text-start py-8"
        >
          <h1 className="text-7xl font-extrabold">
            {/* Light Mode Version */}
            <span
              className="block dark:hidden font-dillan text-black"
              style={{
                WebkitTextStroke: "2.5px black",
              }}
            >
              I'm Söyeb Islam
            </span>

            {/* Dark Mode Version */}
            <span className="hidden dark:block  text-white">
              I'm Söyeb Islam
            </span>
          </h1>

          {/* Typewriter Effect */}
          <p className="font-inter font-semibold text-[#008236] text-xl">
            <Typewriter
              words={["Full Stack Developer", "React & Next.js Expert"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="text-gray-700 dark:text-white">
            I'm a frontend developer based in Rangpur, Bangladesh.
          </p>
          <p>
            I love to{" "}
            <a href="/projects" className="text-[#008236] underline">
              build things{" "}
            </a>
            with JavaScript and publish articles regularly.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center md:justify-start space-x-6 mt-6 text-[#008236] text-3xl"
          >
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
          </motion.div>
        </motion.div>

        {/* Right Side: Spinning Ring + Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48"
        >
          {/* Spinning Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-4 border-[#008236] shadow-[0_0_20px_#008236] z-0"
          />

          {/* Static Profile Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg z-10">
            <img
              src="/undraw_developer-avatar.svg"
              alt="Md. Soyeb Islam"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
