import {
  BuildingOffice2Icon,
  Cog6ToothIcon,
  BoltIcon,
  FireIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const industries = [
  {
    icon: BuildingOffice2Icon,
    title: "Petrochemical Plants",
    description:
      "Specialized electrical systems for high-risk chemical environments with strict compliance.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Manufacturing Units",
    description:
      "Power distribution, control panels, and predictive maintenance for factories.",
  },
  {
    icon: BoltIcon,
    title: "Power & Energy",
    description:
      "Solutions for energy generation, transmission, and power audits.",
  },
  {
    icon: FireIcon,
    title: "Construction & Infrastructure",
    description: "Temporary and permanent electrical setups for large sites.",
  },
  {
    icon: GlobeAltIcon,
    title: "Renewable Energy",
    description: "Solar and wind energy system integration and testing.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Pharmaceutical Plants",
    description:
      "Electrical systems for cleanrooms and automated pharmaceutical manufacturing lines.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-20 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
        Industries We Serve
      </h2>
      <div className="h-1 w-20 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

      {/* Always 3 columns (3×2 grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
        {industries.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all 
                       p-3 sm:p-5 md:p-6 rounded-xl text-center"
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-orange-500 mx-auto mb-3" />
            <h3 className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
