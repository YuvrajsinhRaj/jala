import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ramesh Patel",
    company: "Gujarat Petrochem Ltd.",
    feedback:
      "Shree Jala Electric has been our go-to electrical contractor. Their professionalism and timely delivery are unmatched.",
  },
  {
    name: "Sunita Desai",
    company: "Navratna Infrastructure",
    feedback:
      "Their expertise in industrial retrofitting helped reduce our downtime significantly. Highly recommended!",
  },
  {
    name: "Arvind Mehta",
    company: "PowerGrid Associates",
    feedback:
      "Extremely reliable and safety-focused. We trust them with every high-voltage project across multiple states.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded"></div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
            <h4 className="text-lg font-semibold text-blue-700">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.company}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
