import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "Established with a mission to deliver reliable, safe, and sustainable industrial electrical solutions.",
  },
  {
    year: "2019",
    title: "First Major Project",
    description:
      "Successfully executed our first high-voltage substation commissioning project for a key industrial client.",
  },
  {
    year: "2021",
    title: "Service Expansion",
    description:
      "Expanded our offerings to include EPC turnkey solutions, retrofitting, and energy management services.",
  },
  {
    year: "2023",
    title: "100+ Clients",
    description:
      "Achieved a milestone of serving over 100 industrial clients with continuous support and innovative solutions.",
  },
];

const About = React.memo(function About() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* HERO */}
      <section className="relative mt-10 pt-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Who We Are
            <span className="block h-1.5 w-24 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full mx-auto mt-4"></span>
          </motion.h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1581091215369-1b1c1b51b21c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Professional Electrical Team"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            loading="lazy"
            width={1000}
            height={667}
          />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded in 2021, we are a new-age industrial electrical services
              provider with a clear goal: to deliver reliable, efficient, and
              safe electrical solutions that meet the evolving demands of modern
              industries. Combining fresh ideas with proven engineering
              expertise, we help businesses thrive in a competitive landscape.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our strategic approach is built on four pillars: innovation-driven
              service delivery, client-focused solutions, continuous skill
              enhancement, and sustainable practices. By leveraging cutting-edge
              tools and expertise, we ensure every project — from testing &
              commissioning to energy audits — is executed with precision.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Customized Engineering Solutions",
                "Rapid Response & 24/7 Support",
                "Focus on Safety & Compliance",
                "Long-Term Partnership Culture",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-800 font-medium"
                >
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COMPANY TIMELINE */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10">
            Our Journey
          </h2>
          <div className="relative border-l-4 border-orange-400 pl-8">
            {timeline.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="mb-10 relative"
              >
                <div className="absolute -left-[22px] top-1 w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
                <h4 className="text-lg font-semibold text-orange-600">
                  {event.year} – {event.title}
                </h4>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
