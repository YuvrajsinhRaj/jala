import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700"></div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Text Content */}
          <div className="text-center w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              Ready to Power Up Your Industry?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your project and request
              a free consultation.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold py-2.5 px-5 sm:py-3 sm:px-6 lg:py-3 lg:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
