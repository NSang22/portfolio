"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./scrollReveal";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been sent!`);
    // TODO: Replace this with actual form submission logic (e.g., emailjs, API route)
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen text-white px-8 md:px-16 py-24"
    >
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          get in <span className="text-[#04D9FF]">touch</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl space-y-6 shadow-lg hover:shadow-[#04D9FF]/20 transition-all"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#04D9FF]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#04D9FF]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-[#04D9FF]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-[#04D9FF] text-black font-semibold rounded-lg hover:bg-[#00BFFF] transition-all"
          >
            send message
          </motion.button>
        </motion.form>
      </ScrollReveal>
    </section>
  );
};

export default ContactForm;