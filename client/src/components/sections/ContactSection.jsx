import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { submitContactForm } from "../../api/apiService";
import { FaWhatsapp, FaPhoneAlt, FaShareAlt } from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: "",
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: "", error: false });

    try {
      const response = await submitContactForm(formData);
      setStatus({ submitting: false, message: response.message, error: false });
      // Clear form on success
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        submitting: false,
        message: error.message || "Submission failed. Please try again.",
        error: true,
      });
    }
  };

  const handleShareLocation = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "New Generation School Location",
          text: "Find our location on the map!",
          url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.373977797708!2d74.34149951515275!3d31.520336681320667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904a0e98c9f97%3A0x64b85c2c7f1a30f1!2sNew%20Generation%20School%2C%20B-1%2C%20Lakhpati%20Plaza%2C%20Gulberg%203%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1625091234567!5m2!1sen!2sus7",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert(
        "Web Share API is not supported in this browser. You can manually copy the link."
      );
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      className="bg-gradient-to-br from-blue-100 to-pink-100"
    >
      <style>
        {`
          .social-icon {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            cursor: pointer;
          }
          .social-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
          .contact-form-card {
              background-color: #f0fff4; /* Light green background */
              border: 2px solid #b2f5b2; /* Subtle green border */
          }
          .contact-form-input:focus {
              border-color: #48bb78; /* Green focus ring */
              box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.5);
          }
        `}
      </style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: The Contact Form */}
        <div className="max-w-2xl mx-auto contact-form-card p-8 rounded-lg shadow-md w-full transition-transform duration-500 hover:scale-[1.01]">
          <h3 className="text-4xl font-bubblegum text-green-700 mb-6 drop-shadow-md text-center">
            Send Us a Message!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 contact-form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 contact-form-input"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="p-3 border border-green-300 rounded-lg mb-6 w-full focus:outline-none focus:ring-2 focus:ring-green-500 contact-form-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="p-3 border border-green-300 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 contact-form-input"
              rows="5"
            ></textarea>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status.message && (
            <p
              className={`mt-4 text-center ${
                status.error ? "text-red-500" : "text-green-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              NG Main Campus
            </h1>
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2162126346643!2d81.10287797541459!3d16.716060321796878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614cc49eabf9d%3A0x90af1bae13238044!2sNew%20Generation%20Public%20School!5e0!3m2!1sen!2sin!4v1756029497621!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              NG Icon Campus
            </h1>
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.9180997159347!2d81.09130197541488!3d16.73093782138362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a366bcb6015b9b3%3A0xec46f37d44a1d3ec!2sNew%20Generations%20Public%20Schools%20(ICON%20CAMPUS)!5e0!3m2!1sen!2sin!4v1756029370383!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Share Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-16 flex-wrap">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9848603916"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-110 animate-pulse"
        >
          <FaWhatsapp className="w-10 h-10 text-green-500" />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:9848603916"
          className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-110 animate-pulse animation-delay-500"
        >
          <FaPhoneAlt className="w-8 h-8 text-blue-500" />
        </a>

        {/* Share Location Button 
        <button
          onClick={handleShareLocation}
          href="https://maps.app.goo.gl/dmEs8zCpAyzBQxy37"
          className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-110 hidden sm:flex animate-pulse animation-delay-1000"
        >
          <FaShareAlt className="w-8 h-8 text-blue-500" />
        </button>

         Mobile-specific Share Button (Text-based) 
        <button
          onClick={handleShareLocation}
          href="https://maps.app.goo.gl/dmEs8zCpAyzBQxy37"
          className="flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl font-bold text-gray-800 sm:hidden"
        >
          <FaShareAlt className="w-6 h-6 mr-2 text-blue-500" />
          Share Location
        </button>
        */}

        <style>
          {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}
        </style>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
