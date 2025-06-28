import { motion } from "motion/react";

const skills = [
  "JavaScript",
  "React",
  "Nextjs",
  "MongoDB",
  "Express",
  "Firebase",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Bootstrap",
  "Git",
  "Node.js",
  "Postman",
  "Figma",
];

const SkillsTechnologies = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2
        className="font-dillan text-start text-3xl mb-8"
        style={{ WebkitTextStroke: "1px black" }}
      >
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="shadow-md rounded-lg px-4 py-3 text-center  font-medium text-gray-800 border border-[#008236] hover:border-[#008236] hover:text-[#008236] transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsTechnologies;
