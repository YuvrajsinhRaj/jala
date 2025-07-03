import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function About() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-orange-100 mt-20 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-black mb-4"
          >
            About Us
            <span className="block h-1.5 w-24  bg-gradient-to-r from-orange-400  to-blue-400 rounded-full mx-auto mt-4"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Empowering industries with reliable, safe, and efficient electrical
            solutions — backed by 5+ years of proven excellence.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-black text-center mb-4"
        >
          Who We Are
          <span className="block h-1 w-20 bg-blue-500 rounded-full mx-auto mt-4"></span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1581091215369-1b1c1b51b21c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Professional Electrical Team"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          {/* Advanced Text & Strategies */}
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
              industries. As an ambitious company, we combine fresh ideas with
              proven engineering expertise to help businesses thrive in an
              increasingly competitive landscape.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our strategic approach is built on four pillars: innovation-driven
              service delivery, client-focused solutions, continuous skill
              enhancement, and sustainable practices. By investing in
              cutting-edge diagnostic tools and nurturing a technically
              proficient team, we ensure every project — from testing &
              commissioning to energy audits — is executed to perfection.
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

      {/* OWNER */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-black mb-4"
          >
            Our Founder
            <span className="block h-1 w-20 bg-orange-500 rounded-full mx-auto mt-4"></span>
          </motion.h2>
          <motion.img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Founder Portrait"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-orange-400"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <h3 className="text-2xl font-bold text-orange-600 mb-2">
            Mr. Shanirajsinh Matroja
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            With over 7 years of hands-on industry experience, Arjun founded
            this company in 2021 with a vision to redefine industrial electrical
            services through transparency, technical excellence, and unwavering
            client commitment.
          </p>
          <p className="text-gray-600 italic max-w-xl mx-auto">
            "Every project is more than just work — it’s a promise to deliver
            safety, reliability, and sustainable growth for our clients."
          </p>
          {/* Optional LinkedIn or contact link */}
          {/* <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-orange-600 transition"
            >
              Connect with Us
            </Link>
          </div> */}
        </div>
      </section>

      {/* JOURNEY - MINIMAL DIAGRAM STYLE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-12"
          >
            Our Journey
            <span className="block h-1 w-20 bg-orange-500 rounded-full mx-auto mt-4"></span>
          </motion.h2>

          <div className="relative border-l-2 border-dashed border-orange-400 ml-4 pl-6">
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
                  ➤ {event.year} — {event.title}
                </h4>
                <p className="text-gray-700 mt-1 text-sm">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5+", label: "Years of Experience" },
            { value: "200+", label: "Projects Delivered" },
            { value: "100+", label: "Industrial Clients" },
            { value: "24x7", label: "Support Available" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-100 py-8 px-4 rounded-lg"
            >
              <h4 className="text-4xl font-bold text-blue-700">{stat.value}</h4>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Partner With Us Today</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Ready to upgrade your industrial power systems? Let's discuss your
          project and deliver excellence together.
        </p>
        <Link
          to="/contact"
          className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
