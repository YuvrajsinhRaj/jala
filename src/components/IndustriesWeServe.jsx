import React from "react";
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
      "Complete electrical systems for high-risk chemical environments.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Manufacturing Units",
    description:
      "Power distribution, panel setups, and preventive maintenance.",
  },
  {
    icon: BoltIcon,
    title: "Power & Energy",
    description:
      "Services for energy generation, transmission & electrical audits.",
  },
  {
    icon: FireIcon,
    title: "Construction & Infrastructure",
    description: "Electrical infrastructure for industrial construction sites.",
  },
  {
    icon: GlobeAltIcon,
    title: "Renewable Energy",
    description: "Wiring, testing & control systems for solar/wind projects.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Industries We Serve
      </h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded"></div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Icon className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
