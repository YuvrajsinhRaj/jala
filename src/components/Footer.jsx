import React, { memo } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = memo(() => {
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
    { icon: <FaFacebookF />, url: "#https://facebook.com" },
    { icon: <FaInstagram />, url: "#https://instagram.com" },
    { icon: <FaLinkedinIn />, url: "#https://linkedin.com" },
    { icon: <FaTwitter />, url: "#https://twitter.com" },
  ];

  return (
    <footer
      className="bg-[#0f172a] text-white pt-10 pb-8 md:pt-16 md:pb-12"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <img
            src={assets.logo}
            alt="Shree Jala Electric Logo"
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm md:text-base text-gray-300 mb-4">
            Shree Jala Electric delivers reliable industrial electrical services
            across Gujarat and beyond, prioritizing safety, precision, and
            client satisfaction.
          </p>
          <div className="flex space-x-4 text-lg md:text-xl">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition duration-300"
                aria-label={`Social media link ${index + 1}`}
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm md:text-base">
            {navigationLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-lightBlue-300 transition duration-200 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-orange-400">
            Contact Us
          </h3>
          <address className="not-italic space-y-3 text-sm md:text-base text-gray-300">
            <p>
              <span className="text-gray-400">Address:</span>{" "}
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline block"
              >
                F-57, A-1 F. Akshar Pavilion,
                <br />
                Before Priya Cinema, Gotri Road,
                <br />
                Vadodara 391101, Gujarat, India
              </a>
            </p>

            <p>
              <span className="text-gray-400">Phone:</span>{" "}
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-white transition-colors duration-200"
              >
                {contactInfo.phone}
              </a>
            </p>

            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-white hover:underline transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {currentYear} Shree Jala Electric. All rights reserved.
      </div>
    </footer>
  );
});

export default Footer;
