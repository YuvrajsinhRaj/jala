import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center text-white rounded-lg"
      style={{
        backgroundImage: `url(${assets.hero_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full px-6 md:px-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="font-extrabold leading-tight"
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          Powering Industries with{" "}
          <span className="text-orange-400">Turnkey Electrical Systems</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="max-w-2xl text-gray-200"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          Reliable, compliant, and future-ready electrical solutions for
          factories, OEMs, and utilities — built to maximize uptime and safety.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          <a
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition duration-300 px-6 py-3 text-md sm:text-lg"
          >
            View Services
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full transition duration-300 px-6 py-3 text-lg font-semibold"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        >
          {[
            {
              text: "20+ Years Experience",
              color: "bg-orange-500/20",
              iconColor: "text-orange-400",
            },
            {
              text: "ISO 9001 Certified",
              color: "bg-blue-500/20",
              iconColor: "text-blue-300",
            },
            {
              text: "Trusted by Public Sector",
              color: "bg-green-500/20",
              iconColor: "text-green-300",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:scale-105 transition transform duration-300"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${item.color}`}
              >
                <span className={`text-lg font-bold ${item.iconColor}`}>✓</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
