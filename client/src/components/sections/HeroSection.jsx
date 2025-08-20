import React from "react";

function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const heroImageUrl =
    "https://res.cloudinary.com/dlexfctt4/image/upload/v1755700385/Untitled_design_2_htt3gz.png";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center font-inter text-white overflow-hidden pt-48"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full px-8 py-16 md:py-32 text-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg font-inter text-white">
            New Generation
          </h2>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg font-bubblegum text-yellow-300 transform -skew-y-3 md:hover:skew-y-0 transition-transform duration-300">
            Welcome to Our School!
          </h1>
          <p className="text-lg md:text-2xl mb-8 mx-auto drop-shadow-sm font-semibold">
            A place where every day is a new adventure in learning, creativity,
            and fun!
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-block bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition duration-500 cursor-pointer shadow-lg animate-jiggle"
          >
            Explore Our World!
          </button>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Inter:wght@400;600;700;800&display=swap');
          .font-bubblegum {
            font-family: 'Bubblegum Sans', cursive;
          }
          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          @keyframes jiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
            }
          .animate-jiggle {
            animation: jiggle 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;
