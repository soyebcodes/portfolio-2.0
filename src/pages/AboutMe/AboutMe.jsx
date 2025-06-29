import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <Helmet>
        <title>About | Soyeb Codes</title>
      </Helmet>
      <div className="text-center md:text-left">
        <h1 className="text-4xl mb-3 font-extrabold">
          {/* Light Mode Version */}
          <span
            className="block dark:hidden font-dillan text-black"
            style={{
              WebkitTextStroke: "2.5px black",
            }}
          >
            About me
          </span>

          {/* Dark Mode Version */}
          <span className="hidden dark:block  dark:text-3xl text-white">
            About me
          </span>
        </h1>

        <h3 className="font-space-text font-semibold">Soyeb Islam. 2003.</h3>

        <p className="font-inter text-black mt-4 leading-relaxed dark:text-white ">
          I'm a self-taught developer from Bangladesh.
        </p>
        <p className="font-inter text-black mt-4 leading-relaxed dark:text-white ">
          I've been working to improve myself in web development field since
          2022 with a focus on responsive web applications. I enjoy learning new
          technologies and tools. My motivation for developing this website is
          to share my learnings with the rest of the world.
        </p>
        <p className="font-inter text-black mt-4 leading-relaxed dark:text-white  ">
          Currently, I'm learning advance backend technologies and AI
        </p>
        <p className="font-inter text-black mt-4 leading-relaxed dark:text-white ">
          Along with pixel hunting, I enjoy playing cricket, going to live
          sports events, playing video games, watching TV series, and hanging
          out with my friends.
        </p>
        <p className="font-inter text-black mt-4 leading-relaxed dark:text-white ">
          Find out more about me {""}
          <a
            href="https://drive.google.com/file/d/1ikU89hXyQ929cGp_-hxuLIts89edLfQW/view?usp=sharing"
            className="text-[#008236] underline"
          >
            by visiting this page.
          </a>
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
