import { useState, memo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets"; 

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

export default memo(function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0">
            <img src={assets.logo} alt="Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative text-[17px] font-medium transition-colors duration-300 ${
                    isActive ? "text-[#2A99DE]" : "text-gray-800 hover:text-[#FA682E]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#2A99DE] transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } max-h-[90vh] overflow-y-auto rounded-l-2xl`}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={24} className="text-gray-800" />
          </button>
        </div>
        <div className="px-6 pt-2 pb-6 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#2A99DE] underline"
                    : "text-gray-900 hover:text-[#FA682E]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Background Blur Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/10 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
});
