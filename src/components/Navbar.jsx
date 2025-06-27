import { useState, useEffect, useRef, memo } from "react";
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef(null);

  // Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavbar(false); // scroll down
        } else {
          setShowNavbar(true); // scroll up
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Outside click and Escape key
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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

      {/* Mobile Slide Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto rounded-l-2xl`}
      >
        {/* Drawer Close Button */}
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
    </nav>
  );
});
