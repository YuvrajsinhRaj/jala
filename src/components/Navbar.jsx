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
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img src={assets.logo} alt="Logo" className="h-[52px] w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative block font-semibold text-lg text-gray-800 transition-colors duration-300 ${
                    isActive ? "" : " hover:text-orange-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative block text-base font-bold transition-colors duration-300 ${
                  isActive ? "text-blue-700 font-bold" : "text-black "
                }`
              }
            >
              {() => <>{item.name}</>}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
});
