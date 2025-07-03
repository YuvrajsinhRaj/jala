import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceImg from "../assets/services_home.png";

export default function ServicesPreview() {
  return (
    <motion.section
      className="bg-white py-16 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded"></div>
      <div className="max-w-2xl mx-auto">
        <img
          src={serviceImg}
          alt="Services visual"
          className="rounded-lg w-full mb-6"
        />
        <Link
          to="/services"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          View All Services
        </Link>
      </div>
    </motion.section>
  );
}
