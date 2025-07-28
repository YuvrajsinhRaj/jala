import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {assets} from "../assets/assets.js";

const CompanyOverview = () => {
  return (
    <section className="pt-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Empowering Growth with{" "}
            <span className="text-orange-500">Electrical Expertise</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Since 2021, <strong>Shree Jala Electric</strong> has been the
            trusted partner for India’s top pharma, petrochemical, and
            manufacturing industries, delivering **turnkey electrical systems**
            with a focus on compliance and efficiency.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 text-base max-w-md">
            {[
              "5+ years proven industry expertise",
              "Specialized in critical industrial sectors",
              "End-to-end turnkey execution & compliance",
              "Certified electrical engineers & technicians",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-orange-500 text-xl">✔</span> {item}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Know More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Image & Stats */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <img loading="lazy"
            src={assets.pow_station}
            alt="Industrial electrical solutions"
            className="w-full rounded-3xl shadow-2xl object-cover max-h-[400px]"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg rounded-2xl py-5">
            {[
              ["15+", "Clients"],
              ["26+", "Projects"],
              ["5+", "Years"],
              ["100%", "Compliance"],
            ].map(([value, label], idx) => (
              <div key={idx}>
                <h3 className="text-3xl font-bold text-white">{value}</h3>
                <p className="text-sm text-white">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;
