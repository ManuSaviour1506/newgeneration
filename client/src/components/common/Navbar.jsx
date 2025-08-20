import React, { useState, useEffect } from "react";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Us" },
  { to: "news", label: "News" },
  { to: "events", label: "Events" },
  { to: "gallery", label: "Gallery" },
  { to: "admissions", label: "Admissions" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set 'isScrolled' to true if user scrolls past 100px
      setIsScrolled(scrollTop > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 transition-all duration-300 font-inter">
        {/* Custom CSS for animations and colors */}
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
          
          .bg-teal {
            background-color: #008080;
          }

          .text-teal {
            color: #008080;
          }

          .bg-cyan {
            background-color: #00FFFF;
          }

          .text-cyan {
            color: #00FFFF;
          }
          
          /* A custom class for the hover state to use light green */
          .hover\\:bg-light-green:hover {
              background-color: #90EE90;
          }

          @keyframes pulse-text {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .animate-pulse-text {
            animation: pulse-text 2s ease-in-out infinite;
          }

          .glow-shadow {
            box-shadow: 0 0 15px rgba(0, 128, 128, 0.7);
          }
        `}
        </style>

        {/* Top Section: Logo and School Name (this section collapses on scroll) */}
        <div
          className={`
          bg-teal bg-opacity-90 transition-all duration-500 ease-in-out transform origin-top glow-shadow
          ${
            isScrolled
              ? "scale-y-0 h-0 opacity-0 py-0"
              : "scale-y-100 h-auto opacity-100 py-4"
          }
        `}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* School Logo - now on the left */}
            <img
              src="https://res.cloudinary.com/dkpjimiip/image/upload/v1755677672/new_hci7by.png"
              alt="New Generation School Logo"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* School Name - now on the right */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-wide text-right animate-pulse-text">
              New Generation School
            </h1>
          </div>
        </div>

        {/* Bottom Section: Navigation Links (this section stays sticky) */}
        <div
          className={`
          container mx-auto px-4 bg-teal glow-shadow
          ${isScrolled ? "py-4" : "py-2"}
        `}
        >
          <div className="flex justify-between items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={(e) => handleNavLinkClick(e, link.to)}
                  className={`
                  px-4 py-2 rounded-full font-semibold uppercase cursor-pointer transition-all duration-300
                  bg-white text-teal
                  hover:bg-light-green hover:text-teal
                  shadow-md hover:shadow-xl
                `}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Admin Login Button for Desktop */}
            <div className="hidden md:block">
              <a
                href="/admin/login"
                className={`
                px-6 py-2 rounded-full font-bold shadow-md transform hover:scale-105 transition duration-300
                ${
                  isScrolled
                    ? "bg-white text-red-500"
                    : "bg-light-green text-red-500"
                }
                hover:bg-opacity-80
              `}
              >
                Admin Login
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                onClick={(e) => handleNavLinkClick(e, link.to)}
                className="w-full text-center text-lg font-medium py-2 px-4 transition-colors duration-300 bg-white text-teal hover:bg-light-green hover:text-teal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/admin/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center text-lg font-medium bg-teal text-red-500 px-4 py-2 hover:bg-opacity-80 transition duration-300 mt-2"
            >
              Admin Login
            </a>
          </div>
        </div>
      </nav>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Navbar;
