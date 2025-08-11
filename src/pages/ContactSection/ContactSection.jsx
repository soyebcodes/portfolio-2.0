import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to_email: "your-default-recipient@example.com",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "service_urwwpzx";
    const templateID = "template_j0ucd9q";
    const publicKey = "0S1m6jH2EdWszR3Q2";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: formData.to_email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          to_email: "your-default-recipient@example.com",
        });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-[#008236] dark:text-[#55bb77]">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
        I'd love to hear from you! Whether you have a question or just want to
        say hi, feel free to drop a message.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-8 px-4">
          <div className="flex items-center gap-4">
            <Mail className="text-[#008236]" size={28} />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <a
                href="mailto:soyeb.islam117@gmail.com"
                className="text-gray-600 dark:text-white hover:underline"
              >
                soyeb.islam117@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-[#008236]" size={28} />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-gray-600 dark:text-white">+880 1742373155</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#008236]" size={28} />
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-gray-600 dark:text-white">
                Rangpur, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/soyebcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008236] hover:opacity-80 transition"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/soyebislam3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008236] hover:opacity-80 transition"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white dark:bg-base-100 p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none bg-transparent text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none bg-transparent text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#008236] focus:outline-none bg-transparent text-gray-900 dark:text-white resize-none"
              />
            </div>

            {/* Optional recipient email input */}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-[#008236] text-white font-semibold rounded-lg hover:bg-[#006a2c] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 mt-4 font-medium">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4 font-medium">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
