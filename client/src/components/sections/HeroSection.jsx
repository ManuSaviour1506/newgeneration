import React, { useState, useEffect } from "react";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const showVirtualTour = () => {
    alert(
      "🎥 Virtual tour coming soon! Get ready for an amazing 360° experience of our school!"
    );
  };

  {
    /*
  const features = [
    {
      icon: "🎨",
      title: "Creative Arts",
      color: "from-pink-400 to-red-500",
      href: "#creative-arts",
    },
    {
      icon: "🔬",
      title: "Science Lab",
      color: "from-green-400 to-emerald-500",
      href: "#science-lab",
    },
    {
      icon: "⚽",
      title: "Sports",
      color: "from-purple-400 to-indigo-500",
      href: "#SportsCultural.jsx",
    },
    {
      icon: "📚",
      title: "Library",
      color: "from-yellow-400 to-orange-500",
      href: "#library",
    },
  ];
  */
  }

  const floatingElements = [
    {
      emoji: "🎈",
      position: "top-1/4 left-10",
      size: "text-6xl",
      delay: "0.5s",
    },
    {
      emoji: "⭐",
      position: "bottom-1/4 right-10",
      size: "text-5xl",
      delay: "1s",
    },
    {
      emoji: "🌈",
      position: "top-1/3 right-1/4",
      size: "text-4xl",
      delay: "1.5s",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center font-inter text-white overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/ddgfjerss/image/upload/v1756024586/123hero_bocukl.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-8 py-16 md:py-32 text-center max-w-6xl mx-auto">
        {/* Top Badge */}
        <div
          className={`mb-6 md:mb-8 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          {/*<div className="glass-effect px-6 py-2 rounded-full text-sm md:text-base font-semibold text-cyan-300 border border-cyan-400/30">
            ✨ New Generation High School
          </div>*/}
        </div>

        {/* Main Heading */}
        <div
          className={`mb-4 md:mb-6 ${
            isVisible ? "animate-bounce-in" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-bubblegum text-gradient transform hover:scale-105 transition-transform duration-300 leading-tight">
            New Generation High School
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-6 md:mb-8 ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white drop-shadow-lg font-inter">
            Where Dreams Take Flight 🚀
          </h2>
        </div>

        {/* Description */}
        <div
          className={`max-w-4xl mb-8 md:mb-12 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-base sm:text-lg md:text-2xl mb-4 mx-auto drop-shadow-sm font-medium leading-relaxed">
            Empowering students to soar high with knowledge, creativity, and
            compassion.🎓✨
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${
            isVisible ? "animate-bounce-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 cursor-pointer shadow-lg animate-pulse-glow transform hover:scale-110"
          >
            <span className="relative z-10">🌟 Explore Our World!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          {/*<button
            onClick={showVirtualTour}
            className="group glass-effect text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg transform hover:scale-110 border border-white/30"
          >
            <span className="relative z-10">🎥 Virtual Tour</span>
          </button>
          */}
        </div>

        {/* Feature Icons */}
        <div
          className={`mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-2xl ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          {/* Since features array is commented out, this section will be empty */}
          {/* {features.map((feature, index) => (
            <a
              key={index}
              href={feature.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(feature.href.substring(1));
              }}
              className="flex flex-col items-center group cursor-pointer no-underline text-white"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-2xl md:text-3xl mb-2 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>
              <span className="text-xs md:text-sm font-semibold">
                {feature.title}
              </span>
            </a>
          ))} */}
        </div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} animate-float`}
          style={{ animationDelay: element.delay }}
        >
          {element.emoji}
        </div>
      ))}

      {/* CSS Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Inter:wght@400;600;700;800&display=swap');
          .font-bubblegum { font-family: 'Bubblegum Sans', cursive; }
          .font-inter { font-family: 'Inter', sans-serif; }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.4); }
            50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
          }
          
          @keyframes slide-in-left {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slide-in-right {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes bounce-in {
            0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
            50% { transform: scale(1.05) rotate(5deg); }
            70% { transform: scale(0.9) rotate(-2deg); }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
          .animate-slide-in-right { animation: slide-in-right 1s ease-out 0.3s both; }
          .animate-bounce-in { animation: bounce-in 1.2s ease-out 0.6s both; }
          .animate-gradient { animation: gradient-shift 4s ease infinite; }
          
          .text-gradient {
            background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
