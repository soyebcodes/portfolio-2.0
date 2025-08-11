import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <Helmet>
        <title>Contact | Soyeb Codes</title>
      </Helmet>
      <>
        {/* Light Mode Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-dillan text-center text-4xl mb-8 dark:hidden"
          style={{ WebkitTextStroke: "1.5px black", color: "black" }}
        >
          Contact Me
        </motion.h2>

        {/* Dark Mode Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-4xl mb-8 hidden dark:block font-sans text-white"
          style={{ WebkitTextStroke: "1.5px white" }}
        >
          Contact Me
        </motion.h2>
      </>

      <motion.p
        variants={fadeUp}
        custom={1}
        className="text-center text-gray-600 dark:text-white mb-18 max-w-xl mx-auto"
      >
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:place-items-center md:place-items-stretch gap-12">
        {/* Contact Info */}
        <motion.div variants={fadeUp} custom={2} className="space-y-6 ">
          <div className="flex items-center gap-4">
            <Mail className="text-[#008236] mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:youremail@example.com"
                className="text-gray-600 dark:text-white hover:underline"
              >
                soyeb.islam117@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#008236] mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600  dark:text-white">+880 1742373155</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#008236] mt-1" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600  dark:text-white">
                Rangpur, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/soyebcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008236] hover:opacity-80 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/soyebislam3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008236] hover:opacity-80 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          custom={3}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
          action="/success.html"
          className="space-y-6 backdrop-blur p-6 rounded-xl shadow-md"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4  border border-gray-300 dark:border-none rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block  font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-none rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block  font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-none rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-[#008236] text-white font-medium rounded-lg hover:bg-[#006a2c] transition cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
