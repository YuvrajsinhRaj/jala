import heroImage from "../assets/hero-image.jpeg";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full"
        style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}
      >
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Industrial Engineer at work"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-20">
          <div className="max-w-2xl text-left space-y-6">
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-snug"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Turnkey Electrical Systems Built for Uptime & Compliance
            </h1>

            <p
              className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Turnkey solutions for factories, OEMs, utilities & government —
              built for uptime, safety, and trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a href="/services">
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-base sm:text-lg rounded-lg shadow-md transition duration-300 ease-in-out"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  View Services
                </button>
              </a>
              <a href="/contact">
                <button
                  className="border  border-blue-600 text-blue-600  px-5 py-2.5 text-base sm:text-lg rounded-lg transition duration-300 ease-in-out"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Contact Us
                </button>
              </a>
            </div>

            <div
              className="text-gray-600 text-sm sm:text-base flex flex-wrap gap-3 pt-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span>✓ 20+ Years Experience</span>
              <span>✓ ISO 9001 Certified</span>
              <span>✓ Trusted by Public Sector</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
