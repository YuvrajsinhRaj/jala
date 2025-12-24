import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets.js";

const CompanyOverview = () => {
  return (
    <section className="pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-10">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
            Empowering Growth with{" "}
            <span className="text-orange-500">Electrical Expertise</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Since 2021, <strong>Shree Jala Electric</strong> has been the
            trusted partner for India’s top pharma, petrochemical, and
            manufacturing industries, delivering{" "}
            <span className="font-semibold text-gray-800">
              turnkey electrical systems
            </span>{" "}
            with a focus on compliance and efficiency.
          </p>

          {/* Feature List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            {[
              "5+ years proven industry expertise",
              "Specialized in critical industrial sectors",
              "End-to-end turnkey execution & compliance",
              "Certified electrical engineers & technicians",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-orange-500 text-lg sm:text-xl mt-1">
                  ✔
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow hover:bg-blue-700 transition mx-auto md:mx-0"
          >
            Know More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Image & Stats */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 items-center"
        >
          <img
            loading="lazy"
            src={assets.pow_station}
            alt="Industrial electrical solutions"
            className="w-full rounded-3xl shadow-2xl object-cover max-h-[400px] sm:max-h-[450px]"
          />

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center w-full bg-gradient-to-r from-blue-500 to-orange-400 shadow-lg rounded-2xl py-5 px-2 sm:px-4">
            {[
              ["15+", "Clients"],
              ["26+", "Projects"],
              ["5+", "Years"],
              ["100%", "Compliance"],
            ].map(([value, label], idx) => (
              <div key={idx} className="flex flex-col items-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {value}
                </h3>
                <p className="text-xs sm:text-sm text-white">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;
