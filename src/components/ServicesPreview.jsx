import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceImg from "../assets/services_home.png";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <motion.section
      className=" py-16 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto  rounded"></div>
      <div className="max-w-2xl   mx-auto">
        <img
          src={serviceImg}
          alt="Services visual"
          className="rounded-lg w-full mb-4 lg:w-3/4 lg:mx-auto"
        />
        <Link
          to="/services"
          className="inline-flex items-center bg-blue-400 hover:bg-blue-500 text-white font-bold gap-2 py-2 px-8 rounded-full transition"
        >
          View Services <ArrowRight className="w-4 h-4 " />
        </Link>
      </div>
    </motion.section>
  );
}
