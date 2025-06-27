import React, { memo } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

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
  };

  return (
    <footer className="bg-gray-800 text-white py-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="space-y-4">
            <img
              src={assets.logo}
              alt="Shree Jala Electric Logo"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Shree Jala Electric provides top-tier industrial electrical
              services to clients across the region. We prioritize safety,
              quality, and customer satisfaction in everything we do.
            </p>
            <p className="text-sm text-gray-400 pt-2">
              &copy; {currentYear} Shree Jala Electric. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <address className="not-italic leading-relaxed">
                {contactInfo.address}
              </address>

              <div className="space-y-1">
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
                    className="hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )};  

export default Footer;
