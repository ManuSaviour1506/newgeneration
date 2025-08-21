import React from 'react';

// Define the available color schemes for the background and text
const colorSchemes = {
  white: "bg-white text-gray-800",
  blue: "bg-blue-100 text-blue-900",
  pink: "bg-pink-100 text-pink-900",
  gradient: "bg-gradient-to-br from-blue-100 to-pink-100 text-blue-900",
};

// Define the available title styles
const titleStyles = {
  center:
    "text-5xl md:text-6xl font-extrabold text-center mb-16 drop-shadow-lg font-bubblegum",
  left: "text-4xl md:text-5xl font-bold text-left mb-12 font-bubblegum",
  decorated:
    'text-4xl md:text-5xl font-extrabold text-center relative pb-2 mb-12 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-full font-bubblegum',
};

function SectionWrapper({
  children,
  id,
  title,
  colorScheme = "white",
  titleStyle = "center",
  className = "",
}) {
  // Validate props to ensure a valid color scheme and title style are used
  const appliedColorScheme = colorSchemes[colorScheme] || colorSchemes.white;
  const appliedTitleStyle = titleStyles[titleStyle] || titleStyles.center;

  return (
    <section
      id={id}
      className={`min-h-screen w-full py-24 relative overflow-hidden transition-colors duration-500 font-inter ${appliedColorScheme} ${className}`}
    >
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
        `}
      </style>

      {/* Background confetti shapes for a festive feel */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50">
        <div className="absolute w-24 h-24 bg-yellow-300 rounded-full top-10 left-10 animate-blob mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute w-32 h-32 bg-purple-300 rounded-full top-1/3 left-1/4 animate-blob animation-delay-2000 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute w-40 h-40 bg-pink-300 rounded-full bottom-20 right-20 animate-blob animation-delay-4000 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <h2 className={`text-blue-900 ${appliedTitleStyle}`}>{title}</h2>
        {/* Section Content */}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

export default SectionWrapper;