import React from "react";

// School-themed image URLs
const topImageUrl =
  "https://res.cloudinary.com/dlexfctt4/image/upload/v1755700278/Untitled_design_1_hed5li.png";
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
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-lg">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

function AboutSection() {
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
        `}
      </style>

      {/* Main content grid for images and text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column for Images */}
        <div className="flex flex-col gap-8">
          {/* Top Image Container */}
          <div className="image-container relative rounded-[2.5rem] shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
            <img
              src={topImageUrl}
              alt="School Playground"
              className="rounded-3xl w-full h-auto"
            />
          </div>
          {/* Bottom Image Container */}
          <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <div className="image-container absolute top-0 left-0 w-full h-full rounded-[2.5rem]"></div>
            <img
              src={bottomImageUrl}
              alt="Classroom with kids"
              className="relative z-10 rounded-3xl w-full h-auto p-4"
            />
          </div>
        </div>

        {/* Right Column for Content */}
        <div className="flex flex-col gap-6 text-gray-700">
          <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:rotate-2 transition-transform duration-500">
            <h3 className="text-4xl font-bubblegum text-purple-600 mb-4 drop-shadow-md">
              A World of Learning and Fun!
            </h3>
            <p className="text-lg leading-relaxed">
              Welcome to our school, a magical place where every day is an
              adventure! We believe in learning through play, where little minds
              can explore, discover, and grow in a safe and happy environment.
              Our teachers are like friendly guides, helping every child find
              their spark and shine.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500">
            <h3 className="text-4xl font-bubblegum text-pink-600 mb-4 drop-shadow-md">
              Our Super Powers!
            </h3>
            <ul className="space-y-4 text-lg font-semibold">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3 text-2xl animate-bounce-custom">
                  ⭐
                </span>
                <span className="text-gray-800">Creative & Fun Activities</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-2xl animate-bounce-custom animation-delay-1000">
                  🎨
                </span>
                <span className="text-gray-800">
                  Colorful & Safe Classrooms
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-3 text-2xl animate-bounce-custom animation-delay-2000">
                  🤗
                </span>
                <span className="text-gray-800">Kind & Caring Teachers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
