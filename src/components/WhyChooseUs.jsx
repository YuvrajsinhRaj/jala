import {
  BriefcaseIcon,
  PuzzlePieceIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  BoltIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: BriefcaseIcon,
    title: "Expertise & Experience",
    text: "Years of proven success in industrial electrical projects.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Tailored Solutions",
    text: "Customized for each industry's unique challenges.",
  },
  {
    icon: CheckCircleIcon,
    title: "Certified & Reliable",
    text: "Our licensed engineers ensure top-tier execution.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Prioritizing Safety",
    text: "We lead with a safety-first philosophy.",
  },
  {
    icon: BoltIcon,
    title: "Next-Gen Technology",
    text: "Utilizing the latest tools and monitoring systems.",
  },
  {
    icon: PhoneIcon,
    title: "Dedicated Support",
    text: "Responsive and reliable post-installation support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16  text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Why Choose Us?
      </h2>
      <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 mb-10 rounded"></div>

      {/* Force 3×2 grid on all screen sizes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-3 gap-4 sm:gap-6">
        {reasons.map(({ icon: Icon, title, text }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-3 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl 
                       hover:scale-105 transform transition-all duration-300 text-center"
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-700 mb-3 mx-auto" />
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-green-700">
              {title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
