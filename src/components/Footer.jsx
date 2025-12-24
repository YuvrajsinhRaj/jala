import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Replace with your uploaded logo path
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Fade-in animation for each column
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  const contactInfo = {
    address:
      "F-57, A-1 F. Akshar Pavilion, Before Priya Cinema, Gotri Road, Vadodara 391101, Gujarat, India",
    phone: "+91 12345 67890",
    email: "info@shreejalaelectric.com",
    mapLink:
      "https://www.google.com/maps?q=F-57,+A-1+F.+Akshar+Pavilion,+Before+Priya+Cinema,+Gotri+Road,+Vadodara,+Gujarat,+India",
  };

  const socialMedia = [
    { icon: <FaFacebookF />, url: "https://facebook.com", name: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com", name: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com", name: "Twitter" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-10 pb-6 sm:pt-12 md:pt-16 md:pb-10">
      {/* Main Footer Grid */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start text-center sm:text-left"
      >
        {/* Company Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="flex flex-col h-full space-y-5 justify-start"
        >
          <img
            src={logo}
            alt="Shree Jala Electric Logo"
            loading="lazy"
            className="h-14 w-auto mx-auto sm:mx-0"
          />
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Shree Jala Electric delivers reliable industrial electrical
            solutions across Gujarat and beyond, focusing on safety, precision,
            and long-term client partnerships.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 text-lg">
            {socialMedia.map((media, idx) => (
              <a
                key={idx}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${media.name}`}
                className="p-2 rounded-full bg-white/5 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-col h-full justify-start"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex flex-col h-full justify-start"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-5 text-orange-400">
            Contact Us
          </h3>
          <address className="not-italic space-y-4 text-sm sm:text-base text-gray-300">
            <p>
              <span className="block text-gray-400">Address:</span>
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline block leading-relaxed"
              >
                {contactInfo.address}
              </a>
            </p>
            <p>
              <span className="block text-gray-400">Phone:</span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <span className="block text-gray-400">Email:</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-orange-400 hover:underline transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </p>
          </address>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm sm:text-base text-gray-400">
        &copy; {currentYear} Shree Jala Electric. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
