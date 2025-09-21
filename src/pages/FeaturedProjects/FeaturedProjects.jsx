import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Car,
  LayoutDashboard,
  UtensilsCrossed,
  Music,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import { Briefcase } from "lucide-react";

const featuredProjects = [
  {
    name: "Job Flow",
    description:
      "AI-powered web application to track job applications, analyze resumes, and match job descriptions with required skills. Includes authentication, resume upload, AI resume analyzer, and dashboard analytics.",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "Supabase",
      "NextAuth.js",
      "OpenAI API",
      "Vercel",
    ],
    liveLink: "https://jobflow-liard.vercel.app/",
    github: "https://github.com/soyebcodes/ai-job-application-tracker",
    icon: Briefcase,
    image: "/projects/ai-job-tracker.png",
  },
  {
    name: "MediKart - Multi-Vendor E-commerce Pharmacy",
    description:
      "Full-stack multi-vendor pharmacy platform built with MERN Stack, featuring authentication, role-based dashboards, Stripe payments, dynamic search/filtering, and responsive UI.",
    tools: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "Stripe",
      "React Query",
      "JWT",
    ],
    liveLink: "https://medikartt.netlify.app/",
    github: "https://github.com/soyebcodes/medikart-client",
    icon: ShoppingBag,
    image: "/projects/medikart.png",
  },
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
    name: "Tasty Track",
    description:
      "Save and search recipes with a clean UI and Firebase authentication.",
    tools: ["React", "Firebase", "Tailwind"],
    liveLink: "https://tastytrack-soyeb.netlify.app/",
    github: "https://github.com/soyebcodes/tasty-track-client",
    icon: UtensilsCrossed,
    image: "/projects/tastytrack.png",
  },
];

const dummyBlogs = [
  {
    title: "Mastering onAuthStateChanged in Firebase",
    snippet:
      "Learn how to use Firebase's onAuthStateChanged listener to manage user sessions effectively in real time.",
  },
  {
    title: "React Pagination: Best Practices and Libraries",
    snippet:
      "Explore how to implement efficient pagination in React apps with useState and useEffect, or libraries like React Paginate.",
  },
  {
    title: "Why JWT is the Preferred Choice for Authentication",
    snippet:
      "Understand the benefits of using JSON Web Tokens (JWT) for secure, stateless authentication in modern web apps.",
  },
  {
    title: "Why Custom Hooks Are Powerful in React",
    snippet:
      "Custom hooks let you encapsulate logic, reuse stateful code, and clean up your React components. Here's how to use them right.",
  },
  {
    title: "Understanding App Routing in Next.js",
    snippet:
      "Get familiar with file-based routing in Next.js, including dynamic routes, nested folders, and link navigation.",
  },
  {
    title: "React 19: The Power of Use Hook",
    snippet:
      "The new use() hook in React 19 makes server components simpler. Here's how it works and why it's a big deal.",
  },
  {
    title: "Getting Started with Next.js i18n Routing",
    snippet:
      "Add multilingual support to your Next.js app using built-in internationalized routing and language detection.",
  },
  {
    title: "How to Secure Routes with Firebase Authentication",
    snippet:
      "Use Firebase Auth and route guards to protect sensitive pages and redirect unauthenticated users to login.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1px_2fr] gap-10">
        {/* Left: Project Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008236] mb-6">
            Featured projects
          </h2>

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center   border border-gray-500 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full rounded-xl object-cover ml-2"
                />
              </div>

              <div className="p-4 flex flex-col justify-between w-full">
                <div className="flex items-center gap-2 text-[#008236] font-semibold mb-1 dark:text-white">
                  {project.name}
                </div>
                <p className="text-gray-600 text-start dark:text-white text-sm mb-2 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5  bg-[#008236]/10 text-[#008236] rounded-full dark:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#008236] font-medium">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex items-center justify-between">
            <p className="text-start font-inter text-md mb-6">
              <Link
                className="text-[#008236] inline-flex font-bold items-center gap-1"
                to="/projects"
              >
                All projects
                <ArrowRight size={18} />
              </Link>
            </p>
          </div>
        </div>

        <div className="w-px bg-[#99A1AF] h-full mx-auto" />

        {/* Blog Posts */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008236] mb-6">
            Recent blog posts
          </h2>

          {dummyBlogs.slice(4).map((blog, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              custom={i + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-base-100  border border-gray-500 rounded-lg p-5 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {blog.title}
              </h4>
              <p className="text-gray-600 text-sm dark:text-white">
                {blog.snippet}
              </p>
            </motion.div>
          ))}
          <div className="flex items-center justify-between">
            <p className="text-start font-inter text-md mb-6">
              <Link
                className="text-[#008236] inline-flex font-bold items-center gap-1"
                to="/blog"
              >
                All posts
                <ArrowRight size={18} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
