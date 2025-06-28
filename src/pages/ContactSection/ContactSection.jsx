import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

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
      <motion.h2
        variants={fadeUp}
        className="font-dillan text-center text-4xl mb-8"
        style={{ WebkitTextStroke: "1.5px black" }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        variants={fadeUp}
        custom={1}
        className="text-center text-gray-600 mb-18 max-w-xl mx-auto"
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
                className="text-gray-600 hover:underline"
              >
                soyeb10191@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-[#008236] mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+880 1742373155</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#008236] mt-1" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Rangpur, Bangladesh</p>
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
              href="https://www.linkedin.com/in/md-soyeb-islam-285a00363/"
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
          action="/success.html"
          className="space-y-6 bg-white/70 backdrop-blur p-6 rounded-xl shadow-md"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4  border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-2 bg-[#008236] text-white font-medium rounded-lg hover:bg-[#006a2c] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
