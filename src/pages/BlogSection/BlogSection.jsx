import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Example dummy blog data
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
// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const BlogSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-[#008236] mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Recent Blog Posts
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogs.map((blog, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white dark:bg-base-100 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {blog.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {blog.snippet}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
