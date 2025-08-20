import React, { useState, useEffect } from 'react';

// A unique, fun wrapper component for the entire section
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
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-lg">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// This is a mock API service for demonstration purposes.
// In a real application, this would be a real API call.
const submitContactForm = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.email.includes('@')) {
        resolve({ message: 'Message sent successfully!' });
      } else {
        reject({ message: 'Invalid email address.' });
      }
    }, 1500); // Simulate a network delay
  });
};

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
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
    setStatus({ submitting: true, message: '', error: false });

    try {
      const response = await submitContactForm(formData);
      setStatus({ submitting: false, message: response.message, error: false });
      // Clear form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, message: error.message || 'Submission failed. Please try again.', error: true });
    }
  };

  const handleShare = async () => {
    // Location of the school
    const location = "New Generation School, Gulberg 3, Lahore, Pakistan";
    const shareData = {
      title: 'New Generation School Location',
      text: `Come and visit us at our school! Here is our location: ${location}`,
      url: 'https://maps.app.goo.gl/YourSchoolLocation', // Placeholder URL
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert("Web Share API is not supported in this browser.");
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      className="bg-gradient-to-br from-pink-100 to-blue-100"
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
          }
          .social-icon:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Embedded Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          <iframe
            title="School Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.373977797708!2d74.34149951515275!3d31.520336681320667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904a0e98c9f97%3A0x64b85c2c7f1a30f1!2sNew%20Generation%20School%2C%20B-1%2C%20Lakhpati%20Plaza%2C%20Gulberg%203%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1625091234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Column: Contact Form */}
        <div className="max-w-xl w-full mx-auto bg-white p-8 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          <h3 className="text-4xl font-bubblegum text-blue-900 mb-6 drop-shadow-md text-center">
            Send Us a Message!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="p-4 border border-gray-300 rounded-xl mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="p-4 border border-gray-300 rounded-xl w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5"></textarea>
            
            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {status.message && (
            <p className={`mt-4 text-center text-lg font-semibold ${status.error ? 'text-red-500' : 'text-green-500'}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>

      {/* Social Media and Share Buttons */}
      <div className="flex justify-center items-center space-x-8 mt-16 flex-wrap">
        <a href="https://wa.me/9848603916" target="_blank" rel="noopener noreferrer" className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
          <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.04 2.16c-5.46 0-9.92 4.45-9.92 9.93 0 1.95.56 3.86 1.6 5.56L2.1 22.8l4.08-1.07c1.6.87 3.42 1.34 5.86 1.34 5.47 0 9.93-4.46 9.93-9.93s-4.46-9.93-9.93-9.93zm0 18.04c-1.87 0-3.6-.53-5.1-1.46l-.37-.22-3.66.96.96-3.59-.24-.38c-.97-1.55-1.48-3.3-1.48-5.11 0-4.66 3.79-8.46 8.46-8.46 2.27 0 4.39.9 5.99 2.51 1.6 1.6 2.5 3.72 2.5 5.99 0 4.67-3.8 8.46-8.46 8.46zm5.1-6.19c-.28-.14-.7-.35-.99-.48-.28-.14-1.63-.8-1.88-.9s-.45-.14-.64.14-.73.9-.9.99-.34.14-.64 0c-.28-.14-.99-.35-1.57-.96-.46-.51-.77-1.12-1.03-1.57-.25-.45-.03-.41.22-.65.23-.23.51-.55.77-.82.26-.26.35-.48.49-.66s.19-.35.28-.56c.09-.21-.07-.4-.36-.96s-.68-1.46-.94-1.99c-.25-.52-.51-.43-.7-.44-.19-.01-.4-.01-.64-.01s-.64.14-.9.41c-.26.28-1 .96-1 1.83s.98 2.11 1.12 2.28c.14.18 1.95 2.98 4.72 4.14 1.25.5 2.37.8 3.18 1.05.9.27 1.7.23 2.33.14.7-.1 2.14-.88 2.45-1.74s.31-1.61.22-1.74c-.1-.13-.28-.21-.57-.35z"/>
          </svg>
        </a>
        <a href="tel:9848603916" className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
          <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79a15.115 15.115 0 006.59 6.59l2.21-2.21c.21-.21.5-.29.77-.21l3.52.88c.28.07.5.34.5.64v3.52c0 .28-.22.5-.5.5-5.59 0-10.15-4.56-10.15-10.15 0-.28.22-.5.5-.5h3.52c.3 0 .57.22.64.5l.88 3.52c.08.27 0 .56-.21.77l-2.21 2.21z"/>
          </svg>
        </a>
        <a href="https://instagram.com/newgeneration.eluru" target="_blank" rel="noopener noreferrer" className="social-icon w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
          <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2c2.71 0 3.03.01 4.1.06a7.66 7.66 0 012.33.45 4.88 4.88 0 011.83 1.16 4.88 4.88 0 011.16 1.83 7.66 7.66 0 01.45 2.33c.05 1.07.06 1.39.06 4.1s-.01 3.03-.06 4.1a7.66 7.66 0 01-.45 2.33 4.88 4.88 0 01-1.16 1.83 4.88 4.88 0 01-1.83 1.16 7.66 7.66 0 01-2.33.45c-1.07.05-1.39.06-4.1.06s-3.03-.01-4.1-.06a7.66 7.66 0 01-2.33-.45 4.88 4.88 0 01-1.83-1.16 4.88 4.88 0 01-1.16-1.83 7.66 7.66 0 01-.45-2.33c-.05-1.07-.06-1.39-.06-4.1s.01-3.03.06-4.1a7.66 7.66 0 01.45-2.33 4.88 4.88 0 011.16-1.83 4.88 4.88 0 011.83-1.16 7.66 7.66 0 012.33-.45c1.07-.05 1.39-.06 4.1-.06zM12 4c-2.45 0-2.75 0-3.71.05-.96.05-1.5.21-1.92.38a3.17 3.17 0 00-1.2.73 3.17 3.17 0 00-.73 1.2c-.17.42-.33.96-.38 1.92-.05.96-.05 1.26-.05 3.71s0 2.75.05 3.71c.05.96.21 1.5.38 1.92a3.17 3.17 0 00.73 1.2 3.17 3.17 0 001.2.73c.42.17.96.33 1.92.38.96.05 1.26.05 3.71.05s2.75 0 3.71-.05c.96-.05 1.5-.21 1.92-.38a3.17 3.17 0 001.2-.73 3.17 3.17 0 00.73-1.2c.17-.42.33-.96.38-1.92.05-.96.05-1.26.05-3.71s0-2.75-.05-3.71c-.05-.96-.21-1.5-.38-1.92a3.17 3.17 0 00-.73-1.2 3.17 3.17 0 00-1.2-.73c-.42-.17-.96-.33-1.92-.38-.96-.05-1.26-.05-3.71-.05zm0 2a6 6 0 100 12 6 6 0 000-12zM12 16a4 4 0 110-8 4 4 0 010 8zM17.5 7.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
          </svg>
        </a>
        <button onClick={handleShare} className="social-icon flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl font-bold text-gray-800">
          <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 16.08a2.98 2.98 0 00-2.4-.92c-.22 0-.44.03-.66.08-.26-.85-1.1-1.46-2.14-1.63-.51-.08-1.03-.12-1.56-.12-.53 0-1.05.04-1.56.12-1.04.17-1.88.78-2.14 1.63a2.98 2.98 0 00-2.4.92c-.89.8-1.45 1.83-1.54 2.98h-.02a3 3 0 003 3c1.15 0 2.2-.47 2.98-1.26.79.79 1.84 1.26 2.99 1.26s2.2-.47 2.99-1.26c.78.79 1.83 1.26 2.98 1.26a3 3 0 003-3h-.02a2.98 2.98 0 00-1.54-2.98zM9 11a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6z"/>
          </svg>
          Share Location
        </button>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
