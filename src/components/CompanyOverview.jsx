import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import companyImg from "../assets/power-station.jpeg";

export default function CompanyOverview() {
  return (
    <motion.section
      className=" py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      aria-labelledby="company-overview-title"
    >
      <Helmet>
        <title>Company Overview | Shree Jala Electric</title>
        <meta
          name="description"
          content="Since 2021, Shree Jala Electric has delivered expert testing, retrofitting, and maintenance services across India. Trusted by OEMs, utilities, and factories."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            id="company-overview-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Company Overview
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Left: Image */}
          <div className="h-72 md:h-full w-full overflow-hidden">
            <img
              src={companyImg}
              alt="Electrical engineers on site"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              loading="lazy"
            />
          </div>

          {/* Right: Text content */}
          <div className="p-6 sm:p-10">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Shree Jala Electric
            </h3>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Since 2021, Shree Jala Electric has empowered industrial
              operations across India with reliable, standards-compliant
              electrical services. Based in Vadodara, we specialize in
              minimizing downtime and maximizing safety for OEMs, utilities, and
              high-voltage installations.
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2 text-base">
              <li>Certified and experienced electrical engineers</li>
              <li>Turnkey execution with documentation & compliance</li>
              <li>
                Support for LV/HV panels, transformers, protection systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
