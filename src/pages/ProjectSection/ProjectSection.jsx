import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Car,
  LayoutDashboard,
  UtensilsCrossed,
  Gavel,
} from "lucide-react";
import { Music } from "lucide-react";
import { FaPortrait } from "react-icons/fa";
import { ArrowBigRight } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ArrowRightToLine } from "lucide-react";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    name: "CarWise",
    description:
      "A full-stack car rental app using React, Vite, Tailwind CSS, ShadCN UI, and Firebase Auth.",
    tools: ["React", "Tailwind", "ShadCN", "Firebase"],
    liveLink: "https://carwise-app.netlify.app",
    github: "https://github.com/soyebcodes/carwise-client",
    icon: Car,
    image: "/projects/carwise.png",
  },
  {
    name: "Acme Dashboard",
    description:
      "Admin dashboard built following Next.js Learn docs. Clean and scalable UI.",
    tools: ["Next.js", "Tailwind", "TypeScript"],
    liveLink: "https://nextjs-dashboard-eight-pied-58.vercel.app/",
    github: "https://github.com/soyebcodes/nextjs-dashboard",
    icon: LayoutDashboard,
    image: "/projects/acme.png",
    // bgColor: "bg-gradient-to-r from-green-100 to-green-300",
  },
  {
    name: "Tasty Track",
    description:
      "Track and save your favorite food recipes with a clean UI and search.",
    tools: ["React", "Firebase", "Tailwind"],
    liveLink: "https://tastytrack-soyeb.netlify.app/",
    github: "https://github.com/soyebcodes/tasty-track-client",
    icon: UtensilsCrossed,
    image: "/projects/tastytrack.png",
  },
  {
    name: "Music School",
    description:
      "Dive into our comprehensive music courses and transform your musical journey today.",
    tools: ["Nextjs", "Aceternity UI"],
    liveLink: "https://music-school-nextjs-gold.vercel.app/",
    github: "https://github.com/soyebcodes/music-school-nextjs",
    icon: Music,
    image: "/projects/music.png",
  },
  {
    name: "Portfolio 1.0",
    description: "Order food online.",
    tools: ["Nextjs", "Typescript", "Tailwind CSS"],
    liveLink:
      "https://dev-portfolio-nextjs-1stujxnny-soyeb101s-projects.vercel.app/",
    github: "https://github.com/soyebcodes/soyeb-portfolio01",
    icon: FaPortrait,
    image: "/projects/portfolio.png",
  },
  {
    name: "Evently",
    description:
      "Find and book the best lawyers using ReactJS frontend and a clean interface.",
    tools: ["React", "Tailwind", "React Router"],
    liveLink: "https://event-explorer-d3a22.web.app/",
    github: "https://github.com/soyebcodes/event-exploer",
    icon: Gavel,
    image: "/projects/evently.png",
    // bgColor: "bg-gradient-to-br from-purple-100 to-indigo-200",
  },
];

const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <Helmet>
        <title>Project | Soyeb Codes</title>
      </Helmet>
      <motion.h2 className="text-7xl text-start mb-7 font-extrabold">
        {/* Light Mode Version */}
        <span
          className="block dark:hidden font-dillan text-black"
          style={{
            WebkitTextStroke: "2.5px black",
          }}
        >
          Projects
        </span>

        {/* Dark Mode Version */}
        <span className="hidden dark:block text-3xl text-white">Projects</span>
      </motion.h2>

      <div className="flex items-center justify-between">
        <p className="text-start font-inter text-lg mb-6">
          You can also find all my repos on{" "}
          <a
            className="text-[#008236] font-bold inline-flex items-center gap-1"
            href="https://github.com/soyebcodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <ArrowRight size={18} />
          </a>
        </p>
      </div>

      <hr className="text-[#99A1AF] mb-7" />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image or BG Color */}
              <div className="relative h-56 w-full">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${
                      project.bgColor || "bg-gray-200"
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 text-white text-lg font-semibold">
                  <Icon size={24} />
                  <span>{project.name}</span>
                </div>
              </div>

              {/* Description + Tools + Links */}
              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-gray-700 mb-3 dark:text-white">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-[#008236]/10 text-[#008236] rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-6 text-sm font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#008236] hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#008236] hover:underline"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
