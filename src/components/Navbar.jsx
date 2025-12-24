import { useState, useEffect, useRef, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

/* =======================
   NAV ITEMS CONFIG
======================= */
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

/* =======================
   DESKTOP NAV ITEMS
======================= */
const DesktopNavItems = memo(() =>
  navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.href}
      className={({ isActive }) =>
        `relative text-base sm:text-base md:text-lg lg:text-[18px] xl:text-[20px]
         font-medium transition-colors duration-300 ${
           isActive ? "text-[#FA682E]" : "text-gray-800 hover:text-blue-600"
         }`
      }
    >
      {({ isActive }) => (
        <>
          {item.name}
          {isActive && (
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#2A99DE]" />
          )}
        </>
      )}
    </NavLink>
  ))
);

/* =======================
   MOBILE NAV ITEMS
======================= */
const MobileNavItems = memo(({ closeMenu }) =>
  navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.href}
      onClick={closeMenu}
      className={({ isActive }) =>
        `block text-base sm:text-lg md:text-xl font-semibold
         transition-colors duration-300 ${
           isActive ? "text-[#FA682E]" : "text-gray-900"
         }`
      }
    >
      {item.name}
    </NavLink>
  ))
);

/* =======================
   NAVBAR COMPONENT
======================= */
export default memo(function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const drawerRef = useRef(null);
  const lastScrollYRef = useRef(0);

  /* =======================
     STABLE CALLBACKS
  ======================= */
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* =======================
     BODY SCROLL LOCK
  ======================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================
     SCROLL HIDE / SHOW
  ======================= */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollYRef.current;

          if (delta > 10 && currentScrollY > 100) {
            setShowNavbar(false);
          } else if (delta < -20) {
            setShowNavbar(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =======================
     CLOSE ON OUTSIDE / ESC
  ======================= */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, closeMenu]);

  /* =======================
     CLOSE ON MOBILE SCROLL
  ======================= */
  useEffect(() => {
    const closeOnMobileInteraction = () => {
      if (window.innerWidth < 768) closeMenu();
    };

    if (menuOpen) {
      window.addEventListener("touchstart", closeOnMobileInteraction, {
        passive: true,
      });
      window.addEventListener("wheel", closeOnMobileInteraction, {
        passive: true,
      });
      window.addEventListener("scroll", closeOnMobileInteraction, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("touchstart", closeOnMobileInteraction);
      window.removeEventListener("wheel", closeOnMobileInteraction);
      window.removeEventListener("scroll", closeOnMobileInteraction);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* Hover Reveal Zone (Desktop Only) */}
      <div
        className="fixed top-0 left-0 w-full h-4 sm:h-6 z-[60] hidden md:block"
        onMouseEnter={() => setShowNavbar(true)}
      />

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50
        bg-white/30 backdrop-blur-lg backdrop-saturate-150
        supports-[backdrop-filter]:bg-white/40
        transition-transform duration-500 ease-in-out
        ${
          showNavbar
            ? "translate-y-0 shadow-lg"
            : "-translate-y-full shadow-none"
        }`}
      >
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-[72px] lg:h-20">
            {/* Logo */}
            <NavLink to="/" onClick={closeMenu} className="flex-shrink-0">
              <img
                src={assets.logo}
                alt="Logo"
                loading="lazy"
                className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto transition-all duration-300"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
              <DesktopNavItems />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden pr-2 sm:pr-4">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle Menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          id="mobile-menu"
          ref={drawerRef}
          className={`fixed top-0 right-0 z-40
          w-[85%] sm:w-3/4 max-w-sm
          bg-white shadow-lg rounded-l-2xl
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} aria-label="Close">
              <X size={24} className="text-gray-800" />
            </button>
          </div>

          <div className="px-6 pt-2 pb-6 space-y-6">
            <MobileNavItems closeMenu={closeMenu} />
          </div>
        </div>
      </nav>
    </>
  );
});
