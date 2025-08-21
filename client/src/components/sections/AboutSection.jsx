import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

// School-themed image URLs
const topImageUrl =
  "https://res.cloudinary.com/dlexfctt4/image/upload/v1755700278/Untitled_design_1_hed5li.png";
const middleImageUrl =
  "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786353/WhatsApp_Image_2025-08-20_at_19.21.43_2_qz0tyu.jpg"; // New image added
const bottomImageUrl =
  "https://res.cloudinary.com/dlexfctt4/image/upload/v1755713975/WhatsApp_Image_2025-08-20_at_19.30.04_at3god.jpg";

// A unique, fun wrapper component for the entire section
const SectionWrapper = ({ children, id, title }) => (
  <section
    id={id}
    className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-blue-100 to-pink-100 font-inter"
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

function AboutSection() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconName) => setHoveredIcon(iconName);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <SectionWrapper id="about" title="Playful About Our School">
      {/* Custom CSS for animations and unique styling */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Bubblegum+Sans&display=swap');
        
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
        
        .image-container::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(45deg, #a78bfa, #f87171, #fcd34d, #60a5fa);
          background-size: 400% 400%;
          border-radius: 2.5rem; /* Matches parent rounded-4xl */
          z-index: -1;
          animation: gradient-anim 10s ease infinite;
        }
        
        @keyframes gradient-anim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .loading-animation {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        .loading-animation.loaded {
            opacity: 1;
        }

        .loader {
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid #3498db;
            width: 50px;
            height: 50px;
            -webkit-animation: spin 2s linear infinite; /* Safari */
            animation: spin 2s linear infinite;
        }

        /* Safari */
        @-webkit-keyframes spin {
          0% { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .react-icon-hover {
            transition: transform 0.3s ease, color 0.3s ease;
        }
        .react-icon-hover:hover {
            transform: scale(1.2) rotate(15deg);
        }
        `}
      </style>

      {/* Main content grid for images and text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column for Images */}
        <div className="flex flex-col gap-8">
          {/* Three Image Containers */}
          <div className="image-container relative rounded-[2.5rem] shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img
              src={topImageUrl}
              alt="School Playground"
              className="rounded-3xl w-full h-auto"
            />
          </div>
          <div className="image-container relative rounded-[2.5rem] shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img
              src={middleImageUrl}
              alt="Students Learning"
              className="rounded-3xl w-full h-auto"
            />
          </div>
          <div className="image-container relative rounded-[2.5rem] shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img
              src={bottomImageUrl}
              alt="Classroom with kids"
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column for Content */}
        <div className="flex flex-col gap-6 text-gray-700">
          {/* About Box */}
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              <FaUsers
                size={40}
                className={`text-blue-500 mr-4 react-icon-hover ${
                  hoveredIcon === "about" ? "text-blue-800" : ""
                }`}
              />
              <h3 className="text-4xl font-bubblegum text-blue-600 drop-shadow-md">
                About Our School
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Our school is a place of wonder and growth. We are dedicated to
              nurturing young minds in a safe, vibrant, and innovative
              environment. Our child-centric approach ensures every student
              receives the attention and care they need to succeed.
            </p>
          </div>

          {/* Challenges Box */}
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500"
            onMouseEnter={() => handleMouseEnter("challenges")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap
                size={40}
                className={`text-purple-500 mr-4 react-icon-hover ${
                  hoveredIcon === "challenges" ? "text-purple-800" : ""
                }`}
              />
              <h3 className="text-4xl font-bubblegum text-purple-600 drop-shadow-md">
                Our Challenges
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe in challenging our students not just academically, but
              in every aspect of life. We encourage them to think critically,
              solve problems creatively, and embrace new experiences with
              courage and confidence.
            </p>
          </div>

          {/* Our Aim Box */}
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
            onMouseEnter={() => handleMouseEnter("aim")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              <FaLightbulb
                size={40}
                className={`text-yellow-500 mr-4 react-icon-hover ${
                  hoveredIcon === "aim" ? "text-yellow-800" : ""
                }`}
              />
              <h3 className="text-4xl font-bubblegum text-green-600 drop-shadow-md">
                Our Aim
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Our primary aim is to cultivate a love for learning in every
              child. We strive to provide an educational experience that is both
              academically enriching and personally fulfilling, fostering
              curiosity, creativity, and a strong sense of community.
            </p>
          </div>

          {/* Our Mission Box */}
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500"
            onMouseEnter={() => handleMouseEnter("mission")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center mb-4">
              <FaChalkboardTeacher
                size={40}
                className={`text-pink-500 mr-4 react-icon-hover ${
                  hoveredIcon === "mission" ? "text-pink-800" : ""
                }`}
              />
              <h3 className="text-4xl font-bubblegum text-orange-600 drop-shadow-md">
                Our Mission
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to provide an inclusive and supportive learning
              environment that empowers students to reach their full potential.
              We are dedicated to fostering intellectual curiosity, personal
              growth, and a strong sense of social responsibility.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
