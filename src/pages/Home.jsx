import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  PuzzleIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  LightningBoltIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Clients from "../components/Clients.jsx";

const reasons = [
  {
    icon: BriefcaseIcon,
    title: "Expertise & Experience",
    text: "Years of experience in providing industrial electrical solutions.",
  },
  {
    icon: PuzzleIcon,
    title: "Customized Solutions",
    text: "Tailored solutions to meet specific industrial needs.",
  },
  {
    icon: CheckCircleIcon,
    title: "Reliability & Quality",
    text: "Delivering reliable and high-quality services.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safety First",
    text: "Safety prioritized in all installations and services.",
  },
  {
    icon: LightningBoltIcon,
    title: "Cutting-Edge Technology",
    text: "Utilizing the latest tools and technology.",
  },
  {
    icon: PhoneIcon,
    title: "Dedicated Support",
    text: "Ongoing support and maintenance you can count on.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="w-full mt-7 md:min-h-screen flex flex-col lg:flex-row items-center justify-center relative  text-gray-800 overflow-hidden">
        {/* Overlay Background for Desktop */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.hero_poster})`, zIndex: 0 }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 px-6 lg:px-16 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left space-y-4 mt-6 lg:mt-0">
            <h2 className="text-orange-500 font-bold lg:text-3xl sm:text-4xl">
              Your Strategic Electrical Partner
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Electrical Services for Industries
            </h1>
            <p className="text-gray-700 max-w-md mx-auto lg:mx-0 sm:text-xl">
              Comprehensive electrical solutions for petrochemical, chemical,
              construction, power industry, and more.
            </p>
            <Link
              href="/services"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              View Services
            </Link>
            <div className="flex justify-center lg:justify-start gap-6 pt-6 text-md flex-wrap font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 text-xl ">✔</span> 5+ Years
                Experiences
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 text-xl">⚙</span> Certified
                Technicians
              </div>
            </div>
          </div>

          {/* Placeholder on desktop to preserve spacing */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </section>

      {/* Company Overview */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center mb-18">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-black">Overview</h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:w-1/2 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/engineers-with-hard-hats-working-nuclear-power-plant_23-2150957670.jpg"
                alt="Engineers at work"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-6 text-left">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">
                Shree Jala Electric
              </h3>
              <h4 className="text-xl text-gray-700 mb-4">
                Powering Your Operations with Safety and Reliability
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Established in Vadodara in 2021, Shree Jala Electric is your
                trusted partner for comprehensive electrical system care. We
                specialize in expert testing services, efficient retrofitting,
                proactive maintenance, regulatory inspections, and essential
                certification services. Our mission is to provide peace of mind
                to industrial and commercial clients through expert handling of
                their electrical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="bg-white  flex flex-col justify-center items-center px-6 text-center md:max-h-screen mb-18">
        <div className="">
          <h2 className="text-3xl font-bold text-black">What We Do</h2>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>
        </div>

        <div className="w-full max-w-2xl max-h-xl">
          <img
            src={assets.services_home}
            alt="Electrical services visual"
            className="mx-auto w-full max-w-[90%] md:max-w-[70%] rounded-md  md:h-[70%]"
          />
          <Link
            to="/services"
            className="inline-block mt-4 bg-indigo-500 hover:bg-white hover:text-indigo-700 border border-indigo-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* Counter Section */}
      <section className="bg-indigo-600 py-16 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        <div>
          <h3 className="text-4xl font-bold ">200+</h3>
          <p className="mt-2">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">5+</h3>
          <p className="mt-2">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">50+</h3>
          <p className="mt-2">Active Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold ">10+</h3>
          <p className="mt-2">States Served</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold  text-black">Why Choose Us?</h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map(({ icon: Icon, title, text }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-orange-200  shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center"
              >
                <Icon
                  className="h-10 w-10 text-green-700 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Power Up Your Industry?
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Get in touch with our team today to discuss your project needs and
          request a free consultation.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
