
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import companyImg from "../assets/power-station.jpeg";

const CompanyOverview = () => {
  return (
    <>
     
      <section className=" py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Powering Industrial Growth with{" "}
              <span className="text-orange-600">
                Reliable Electrical Expertise
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Since 2021, <strong>Shree Jala Electric</strong> has delivered
              turnkey, compliance-driven electrical solutions to India’s leading
              pharma, petrochemical, and manufacturing companies.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 text-base max-w-xl">
              <li className="flex gap-2 items-center">
                <span className="text-orange-600 font-bold text-xl">✔</span>
                5+ years proven industry expertise
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-600 font-bold text-xl">✔</span>
                Specialized in critical industrial sectors
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-600 font-bold text-xl">✔</span>
                End-to-end turnkey execution & compliance
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-600 font-bold text-xl">✔</span>
                Certified electrical engineers & technicians
              </li>
            </ul>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 border-1 text-blue-500 font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-blue-500 hover:text-white  transition"
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
            <img
              src={companyImg}
              alt="Industrial electrical services by Shree Jala Electric in Vadodara"
              className="w-full rounded-3xl shadow-2xl object-cover max-h-[400px]"
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center bg-gradient-to-r from-blue-400  to-orange-400 shadow-md rounded-2xl py-5 px-8">
              <div>
                <h3 className="text-3xl font-extrabold text-white/90">15+</h3>
                <p className="text-sm text-white"> Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white/90">26+</h3>
                <p className="text-sm text-white">Turnkey Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white/90">5+</h3>
                <p className="text-sm text-white">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white/90">100%</h3>
                <p className="text-sm text-white">Compliance Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CompanyOverview;
