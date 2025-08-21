import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function SportsCultural() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const sportsActivities = [
    { 
      title: "PLAY SCHOOL", 
      description: "Our play school section focuses on creative learning through play, helping young children develop essential motor and social skills.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755788621/IMG_1938_kltepb.jpg" 
    },
    { 
      title: "Carrom-Board", 
      description: "Carrom-board promotes strategic thinking and precision, encouraging friendly competition among students.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755788620/WhatsApp_Image_2025-08-21_at_15.27.09_kwahlz.jpg" 
    },
    { 
      title: "Badminton", 
      description: "Our badminton team regularly competes in district-level tournaments, promoting agility and competitive spirit.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786355/WhatsApp_Image_2025-08-20_at_19.27.56_d4umiq.jpg" 
    },
    { 
      title: "Yoga Sessions", 
      description: "Weekly yoga sessions are held to promote mental clarity, flexibility, and overall well-being in students.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786354/WhatsApp_Image_2025-08-20_at_19.27.53_wxgaif.jpg" 
    },
    { 
      title: "Yoga Practice", 
      description: "Our students practice various yoga poses to enhance concentration and physical health.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786354/WhatsApp_Image_2025-08-20_at_19.21.44_uibww2.jpg" 
    },
     { 
      title: "Yoga at School", 
      description: "A large group of students participating in a morning yoga session at our school.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786352/WhatsApp_Image_2025-08-20_at_19.21.40_frnxer.jpg"
    },
  ];

  const culturalActivities = [
    { 
      title: "Convocation", 
      description: "Our convocation ceremony celebrates the achievements and hard work of our graduating students.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786355/WhatsApp_Image_2025-08-20_at_19.27.55_2_oz6sal.jpg" 
    },
    { 
      title: "Christmas Celebrations", 
      description: "Students and staff come together to celebrate Christmas with festive songs, decorations, and performances.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786354/WhatsApp_Image_2025-08-20_at_19.21.43_1_ktk7np.jpg" 
    },
    { 
      title: "Science & Art Exhibition", 
      description: "An event where students display their innovative projects and artistic creations to the community, fostering creativity and scientific thinking.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786356/WhatsApp_Image_2025-08-20_at_19.27.58_ztb9tp.jpg" 
    },
    { 
      title: "Krishna Janmashtami", 
      description: "Students perform traditional dances and skits to celebrate Krishna Janmashtami, enriching their cultural knowledge.", 
      imageUrl: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755786352/WhatsApp_Image_2025-08-20_at_19.21.39_qk6yzj.jpg" 
    },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 p-8 pt-24">
        {/* Custom CSS for fonts and new colors */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Inter:wght@400;700;800&display=swap');
            .font-bubblegum { font-family: 'Bubblegum Sans', cursive; }
            .font-inter { font-family: 'Inter', sans-serif; }
            .text-teal-900 { color: #004d40; }
            .text-cyan-600 { color: #00b8d4; }
            .border-tankan { border-color: #FF9933; }
          `}
        </style>
        
        <button 
          onClick={() => navigate(-1)} 
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-6 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-lg font-bubblegum">
          Sports & Cultural Activities
        </h1>

        {/* Sports Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-teal-900 font-bubblegum">Sports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsActivities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer border-4 border-transparent hover:border-tankan"
                onClick={() => openModal(activity)}
              >
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-600 font-inter">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description.substring(0, 70)}...</p>
                  <button className="mt-4 text-blue-600 font-semibold text-sm">View More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center text-teal-900 font-bubblegum">Cultural Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalActivities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer border-4 border-transparent hover:border-tankan"
                onClick={() => openModal(activity)}
              >
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-600 font-inter">{activity.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description.substring(0, 70)}...</p>
                  <button className="mt-4 text-blue-600 font-semibold text-sm">View More</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for viewing full details */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full relative transform scale-100 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-3xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-inter">{selectedImage.title}</h3>
              <p className="text-gray-700 leading-relaxed font-inter">{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SportsCultural;