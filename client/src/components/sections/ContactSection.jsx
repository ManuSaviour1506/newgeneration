import React, { useState } from "react";
// The following two components are for a consistent design
const SectionWrapper = ({ children, id, title, className = '' }) => (
  <section
    id={id}
    className={`min-h-screen py-24 relative overflow-hidden font-inter ${className}`}
  >
    {/* Background confetti shapes for a festive feel */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50">
      <div className="absolute w-24 h-24 bg-yellow-300 rounded-full top-10 left-10 animate-blob mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute w-32 h-32 bg-purple-300 rounded-full top-1/3 left-1/4 animate-blob animation-delay-2000 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute w-40 h-40 bg-pink-300 rounded-full bottom-20 right-20 animate-blob animation-delay-4000 mix-blend-multiply filter blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-lg font-bubblegum">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// Mock API service for demonstration
const submitContactForm = (formData) => {
  console.log("Submitting form data:", formData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve({ message: 'Message sent successfully! We will contact you soon.' });
      // To simulate an error, uncomment the line below and comment the one above
      // reject({ message: 'Error: Something went wrong. Please try again later.' });
    }, 1500);
  });
};

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

  const [shareMessage, setShareMessage] = useState(null);

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
          url: "https://maps.app.goo.gl/wgV4XEMVnxy22zrC8",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Use a state-driven message box instead of alert()
      setShareMessage({
        text: "Web Share API is not supported in this browser. You can manually copy the link.",
        error: true,
      });
      setTimeout(() => setShareMessage(null), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact Us"
      className="bg-gradient-to-br from-blue-100 to-pink-100"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Inter:wght@400;600;700;800&display=swap');
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          .font-bubblegum {
              font-family: 'Bubblegum Sans', cursive;
          }

          @keyframes blob {
            0% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }
          
          .animate-blob {
            animation: blob 7s infinite cubic-bezier(0.64, 0.05, 0.51, 0.95);
          }

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

        {/* Right Column: Embedded Map */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2162126346643!2d81.10287797541459!3d16.716060321796878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614cc49eabf9d%3A0x90af1bae13238044!2sNew%20Generation%20Public%20School!5e0!3m2!1sen!2sin!4v1755799982832!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Media and Share Buttons */}
      <div className="flex justify-center items-center space-x-8 mt-16 flex-wrap">
        <a
          href="https://wa.me/9848603916"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <FaWhatsapp className="w-10 h-10 text-green-500" />
        </a>
        <a
          href="tel:9848603916"
          className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <FaPhoneAlt className="w-8 h-8 text-blue-500" />
        </a>
        <button
          onClick={handleShareLocation}
          className="social-icon flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl font-bold text-gray-800"
        >
          <FaShareAlt className="w-6 h-6 mr-2 text-blue-500" />
          Share Location
        </button>
      </div>
      {shareMessage && (
        <div className={`mt-4 text-center font-semibold ${shareMessage.error ? 'text-red-500' : 'text-green-600'}`}>
          {shareMessage.text}
        </div>
      )}
    </SectionWrapper>
  );
}

export default ContactSection;
