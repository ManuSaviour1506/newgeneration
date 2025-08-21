import React from "react";
import { Link as ScrollLink } from "react-scroll";
// Import icons from react-icons library
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';

function Footer() {
  const quickLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "admissions", label: "Admissions" },
    { to: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: FaFacebook, label: "Facebook" },
    { href: "#", icon: FaYoutube, label: "Youtube" },
    { href: "#", icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-[#66CDAA] text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: School Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">New Generation School</h2>
            <p className="text-gray-800">Nurturing Minds, Shaping Futures.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mt-1 mr-3 shrink-0 text-gray-800">
                  <IoLocationSharp size={20} />
                </span>
                <span>Kothapet, Powerpet, Eluru, Andhra Pradesh, 534002</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0 text-gray-800">
                  <IoCall size={20} />
                </span>
                <a
                  href="tel:+919848603916"
                  className="hover:text-black transition-colors"
                >
                  +91 98486 03916
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0 text-gray-800">
                  <IoMail size={20} />
                </span>
                <a
                  href="mailto:newgenerationschooleluru@gmail.com"
                  className="hover:text-black transition-colors"
                >
                  newgenerationschooleluru@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-400 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} StackZy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;