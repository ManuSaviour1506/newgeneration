import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Main navigation links for the top bar
const mainNavLinks = [
  { to: "/", label: "Home", isSection: false },
  { to: "#about", label: "About Us", id: "about", isSection: true },
  { to: "#news", label: "Facilities", id: "news", isSection: true },
  { to: "#events", label: "Achievements", id: "events", isSection: true },
  { to: "#gallery", label: "Gallery", id: "gallery", isSection: true },
  { to: "#admissions", label: "Admissions", id: "admissions", isSection: true },
];

// Links to be placed in the dropdown menu
const dropdownLinks = [
  {
    to: "/sports-cultural",
    label: "Sports & Cultural",
    isSection: false,
    icon: "🏀",
  },
  { to: "/field-trips", label: "Field Trips", isSection: false, icon: "🗺️" },
  { to: "/staff", label: "Staff", isSection: false, icon: "🧑‍🏫" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e, link) => {
    if (link.isSection && location.pathname === "/") {
      e.preventDefault();
      const targetElement = document.getElementById(link.id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    } else if (link.isSection && location.pathname !== "/") {
      e.preventDefault();
      navigate(`/${link.to}`);
    } else {
      navigate(link.to);
    }

    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileMoreOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 font-inter">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
            .bg-teal { background-color: #008080; }
            .text-teal { color: #008080; }
            .hover\\:bg-light-green:hover { background-color: #90EE90; }
            @keyframes pulse-text { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
            .animate-pulse-text { animation: pulse-text 2s ease-in-out infinite; }
            .glow-shadow { box-shadow: 0 0 15px rgba(0, 128, 128, 0.7); }
            .rotate-180 { transform: rotate(180deg); }
          `}
        </style>

        {/* Top Section: Logo and School Name */}
        <div
          className={`bg-teal bg-opacity-90 transition-all duration-500 ease-in-out transform origin-top glow-shadow ${
            isScrolled
              ? "scale-y-0 h-0 opacity-0 py-0"
              : "scale-y-100 h-auto opacity-100 py-4"
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <img
              src="https://res.cloudinary.com/dkpjimiip/image/upload/v1755677672/new_hci7by.png"
              alt="New Generation School Logo"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-wide text-right animate-pulse-text">
              New Generation High School
            </h1>
          </div>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div
          className={`container mx-auto px-4 bg-teal glow-shadow ${
            isScrolled ? "py-4" : "py-2"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Desktop Navigation Links (Visible on large screens) */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 lg:space-x-8 relative">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="px-3 py-1 rounded-full text-xs lg:text-sm font-semibold uppercase cursor-pointer transition-all duration-300 bg-white text-teal hover:bg-light-green hover:text-teal shadow-md hover:shadow-xl"
                >
                  {link.label}
                </Link>
              ))}

              {/* Desktop Dropdown Menu */}
              <div className="relative">
                <button
                  onClick={handleDropdownClick}
                  className="px-3 py-1 rounded-full text-xs lg:text-sm font-semibold uppercase cursor-pointer transition-all duration-300 bg-white text-teal hover:bg-light-green hover:text-teal shadow-md hover:shadow-xl"
                >
                  More
                  <svg
                    className={`ml-1 inline-block h-4 w-4 transform transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl z-50">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={(e) => handleNavLinkClick(e, link)}
                        className="block w-full text-center text-sm font-medium py-2 px-4 transition-colors duration-300 text-teal hover:bg-light-green hover:text-teal whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Admin Login Button for Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/admin/login"
                className={`px-4 py-1 rounded-full text-sm font-bold shadow-md transform hover:scale-105 transition duration-300 ${
                  isScrolled
                    ? "bg-white text-red-500"
                    : "bg-light-green text-red-500"
                } hover:bg-opacity-80`}
              >
                Admin Login
              </Link>
            </div>

            {/* Mobile Menu Button (Visible on tablets and phones) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Redesigned) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white flex flex-col items-start space-y-2 py-4 px-6">
            {/* Main Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => handleNavLinkClick(e, link)}
                className="w-full text-left text-base font-medium py-2 px-4 transition-colors duration-300 text-teal hover:bg-light-green hover:text-white rounded"
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown for More Links */}
            <div className="w-full">
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="w-full text-left text-base font-medium py-2 px-4 transition-colors duration-300 text-teal hover:bg-light-green hover:text-white rounded flex justify-between items-center"
              >
                More
                <svg
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    isMobileMoreOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Nested Dropdown Links */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileMoreOpen
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-gray-50 flex flex-col items-start space-y-1 py-2 pl-8 pr-4">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={(e) => handleNavLinkClick(e, link)}
                      className="w-full text-left text-sm font-medium py-2 px-4 transition-colors duration-300 text-gray-700 hover:bg-gray-200 rounded"
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div style={{ height: isScrolled ? "100px" : "150px" }} />
    </>
  );
}

export default Navbar;