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
  const drawerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const timeoutRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-based navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      // Scrolling down
      if (scrollDelta > 10 && currentScrollY > 100) {
        if (!timeoutRef.current) {
          timeoutRef.current = setTimeout(() => {
            setShowNavbar(false);
            timeoutRef.current = null;
          }, 200); // delay before hiding
        }
      }

      // Scrolling up
      if (scrollDelta < -20) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setShowNavbar(true); // instant show
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close menu on outside click or ESC
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
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

  // Close menu on scroll or touch on mobile
  useEffect(() => {
    const closeOnScrollOrTouch = () => {
      if (window.innerWidth < 768) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("touchstart", closeOnScrollOrTouch, {
        passive: true,
      });
      window.addEventListener("wheel", closeOnScrollOrTouch, { passive: true });
      window.addEventListener("scroll", closeOnScrollOrTouch, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("touchstart", closeOnScrollOrTouch);
      window.removeEventListener("wheel", closeOnScrollOrTouch);
      window.removeEventListener("scroll", closeOnScrollOrTouch);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky Hover Zone - triggers navbar show */}
      <div
        className="fixed top-0 left-0 w-full h-3 z-[60] cursor-pointer"
        onMouseEnter={() => setShowNavbar(true)}
      />

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 bg-white/30 backdrop-blur-md backdrop-saturate-150 transition-all duration-500 ease-in-out ${
          showNavbar
            ? "translate-y-0 shadow-lg"
            : "-translate-y-full shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex-shrink-0"
            >
              <img
                src={assets.logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-300"
              />
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4 lg:space-x-10 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative text-base sm:text-lg lg:text-[20px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#FA682E]"
                        : "text-gray-800 hover:text-blue-600"
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

            {/* Mobile Toggle */}
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

        {/* Mobile Drawer */}
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto rounded-l-2xl`}
        >
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
                  `block text-base sm:text-lg font-semibold transition-colors duration-300 ${
                    isActive ? "text-[#FA682E]" : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
});
