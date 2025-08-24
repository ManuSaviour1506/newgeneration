import React, { useState } from "react";
// All imports from "react-icons/fa" have been replaced with inline SVG components
// to ensure the code compiles correctly without external dependencies.

// School-themed image URLs
// The URLs are now distinct for each section.
const imageUrls = {
  about: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755700278/Untitled_design_1_hed5li.png",
  academics: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756033315/ADMISSIONS_tfxkhb.png",
  aim: "https://res.cloudinary.com/dlexfctt4/image/upload/v1755713975/WhatsApp_Image_2025-08-20_at_19.30.04_at3god.jpg",
  campus: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756037892/WhatsApp_Image_2025-08-24_at_16.58.05_k05gea.jpg",
  mission: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756038879/adfaf_adzhkx.png",
  founder: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756036643/newimh_mphrgd.png",
  principal: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756038493/pinci_egbkrl.png", // New URL for Principal
  manager: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756036766/ha_ycgxao.png",
  administrator: "https://res.cloudinary.com/ddgfjerss/image/upload/v1756036770/adminis_pevblf.png",
};

// Inline SVG components to replace react-icons/fa
const GraduationCapIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 640 512">
    <path fill="currentColor" d="M537.6 42.79c-7.388-12.89-21.2-20.79-36.1-20.79h-448C38.7 22 25.08 29.89 17.69 42.79S-1.603 69.37 2.053 84.77l160 224C165.7 318.5 174.5 320 183.1 320h272c9.643 0 18.5-1.503 26.04-4.766l160-224C641.6 69.37 635.4 55.68 622.3 42.79L537.6 42.79zM528 292.8l-160 224c-5.875 8.219-15.56 13.2-26.04 13.2h-272c-10.48 0-20.17-4.981-26.04-13.2l-160-224C-4.148 283.4 2.053 269.7 15.11 256.8L104 176l272 272c7.664 7.664 20.21 7.664 27.88 0l124.9-124.9C537.3 310.2 537.3 301.7 528 292.8z"/>
  </svg>
);

const ChalkboardTeacherIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 640 512">
    <path fill="currentColor" d="M537.6 42.79c-7.388-12.89-21.2-20.79-36.1-20.79h-448C38.7 22 25.08 29.89 17.69 42.79S-1.603 69.37 2.053 84.77l160 224C165.7 318.5 174.5 320 183.1 320h272c9.643 0 18.5-1.503 26.04-4.766l160-224C641.6 69.37 635.4 55.68 622.3 42.79L537.6 42.79zM528 292.8l-160 224c-5.875 8.219-15.56 13.2-26.04 13.2h-272c-10.48 0-20.17-4.981-26.04-13.2l-160-224C-4.148 283.4 2.053 269.7 15.11 256.8L104 176l272 272c7.664 7.664 20.21 7.664 27.88 0l124.9-124.9C537.3 310.2 537.3 301.7 528 292.8z"/>
  </svg>
);

const UsersIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 640 512">
    <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-16 48c-100.9 0-184.2 64.6-192 152.1c-.5 5.2-.6 10.3-.6 15.4c0 1.2.2 2.3.4 3.4c.5 3.3.6 6.5.6 9.8c0 23.3 19 42.2 42.3 42.2H384c23.3 0 42.3-19 42.3-42.2c0-3.3.1-6.5.6-9.8c.2-1.1.4-2.2.4-3.4c0-5.1-.1-10.2-.6-15.4C416.2 320.6 332.9 292 224 292zm224-48a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-16 48c-100.9 0-184.2 64.6-192 152.1c-.5 5.2-.6 10.3-.6 15.4c0 1.2.2 2.3.4 3.4c.5 3.3.6 6.5.6 9.8c0 23.3 19 42.2 42.3 42.2H576c23.3 0 42.3-19 42.3-42.2c0-3.3.1-6.5.6-9.8c.2-1.1.4-2.2.4-3.4c0-5.1-.1-10.2-.6-15.4C608.2 320.6 524.9 292 448 292z"/>
  </svg>
);

const LightbulbIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 384 512">
    <path fill="currentColor" d="M368 160c-26.6 0-48 21.4-48 48s21.4 48 48 48h24c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16h-24zM16 160c-26.6 0-48 21.4-48 48s21.4 48 48 48H40c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H16zM288 384c-12.8 0-25.1-4.7-34.9-13.6L192 312.3l-61.1 58.1C121.1 379.3 108.8 384 96 384c-35.3 0-64-28.7-64-64c0-12.8 4.7-25.1 13.6-34.9l58.1-61.1L32 192c-12.8 0-25.1-4.7-34.9-13.6L12.5 168.1C4.7 159.2 0 148.8 0 137.6C0 94.6 35.8 58.7 80 58.7c26.1 0 50.1 12.3 64 32c13.9-19.7 37.9-32 64-32s50.1 12.3 64 32c13.9-19.7 37.9-32 64-32c44.2 0 80 35.8 80 78.9c0 11.2-4.7 21.6-12.5 29.5l-33.6 33.6c-8.9 8.9-13.6 21.2-13.6 34.9c0 35.3-28.7 64-64 64z"/>
  </svg>
);

const StarIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 576 512">
    <path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12.3 3.5 24.6 14.7 31.8s27.1 6.3 36.9-1.6l128.2-103.6 128.2 103.6c9.8 7.9 23.9 8.4 36.9 1.6s16.7-19.5 14.7-31.8L438.2 329 542.4 225.9c8.6-8.5 11.3-20.8 7.9-32.7s-13.7-19.9-25.7-21.7L381.1 150.3 316.9 18z"/>
  </svg>
);

const BuildingIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 576 512">
    <path fill="currentColor" d="M128 472c1.1-9.9 2-19.9 2-30V272c0-8.8-7.2-16-16-16s-16 7.2-16 16V442c-1.2-1.9-2.3-3.8-3.4-5.8c-25.9-49.3-43-98.1-43-158.2c0-81.8 54.2-143.1 113.8-193.3C190.9 83.2 240 64 288 64c48 0 97.1 19.2 144.6 50.7C477.8 150.7 532 212 532 292c0 60.1-17.1 108.9-43 158.2c-1.1 2.1-2.2 4-3.4 5.8V272c0-8.8-7.2-16-16-16s-16 7.2-16 16V442c0 10.1 .9 20.1 2 30c-11.2-1.2-22.3-2.6-33.3-4.2C402.6 460.5 352.9 448 304 448h-16c-48.9 0-98.6 12.5-147.3 22.8c-11 1.7-22.1 3.1-33.3 4.2zM288 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
  </svg>
);

const UserTieIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 640 512">
    <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-16 48c-100.9 0-184.2 64.6-192 152.1c-.5 5.2-.6 10.3-.6 15.4c0 1.2.2 2.3.4 3.4c.5 3.3.6 6.5.6 9.8c0 23.3 19 42.2 42.3 42.2H384c23.3 0 42.3-19 42.3-42.2c0-3.3.1-6.5.6-9.8c.2-1.1.4-2.2.4-3.4c0-5.1-.1-10.2-.6-15.4C416.2 320.6 332.9 292 224 292zm224-48a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-16 48c-100.9 0-184.2 64.6-192 152.1c-.5 5.2-.6 10.3-.6 15.4c0 1.2.2 2.3.4 3.4c.5 3.3.6 6.5.6 9.8c0 23.3 19 42.2 42.3 42.2H576c23.3 0 42.3-19 42.3-42.2c0-3.3.1-6.5.6-9.8c.2-1.1.4-2.2.4-3.4c0-5.1-.1-10.2-.6-15.4C608.2 320.6 524.9 292 448 292z"/>
  </svg>
);

const ClipboardIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 384 512">
    <path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32V64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H320V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H192v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H96V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H128V32c0-17.7 14.3-32 32-32H224zM320 224c0-8.8-7.2-16-16-16h-48v48h48c8.8 0 16-7.2 16-16V224z"/>
  </svg>
);

// New SVG for the Principal section
const CrownIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={size} height={size} viewBox="0 0 576 512">
    <path fill="currentColor" d="M299.7 16.4c18.5-7.8 38.6-7.8 57.1 0L493.1 77.2l8.8 8c12 11 28.3 17.8 45.4 17.8H576c-3.1 33.7-22.3 62.7-50.5 81.3c-1.1 2.2-2.1 4.3-3.2 6.5l-42.8 84.8c-10.4 20.6-32.3 29-53 18.6s-29-32.3-18.6-53L480 200c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32s-32 14.3-32 32s-32-14.3-32-32s-32 14.3-32 32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32c0-17.7-14.3-32-32-32H0c0 16.2 3.8 31.8 11.2 46.1l42.8 84.8c10.4 20.6 32.3 29 53 18.6s29-32.3 18.6-53L77.9 161.5c-1.1-2.2-2.1-4.3-3.2-6.5C46.3 134.7 27.1 105.7 24 72h-1.3c18.5 0 34.8-6.8 46.8-17.8l8.8-8L281.3 16.4c18.5-7.8 38.6-7.8 57.1 0zM384 288c-17.7 0-32 14.3-32 32v64H224V320c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v96h320V320c0-17.7-14.3-32-32-32H384zM160 480H224v32H160v-32zm64-320c0 17.7-14.3 32-32 32s-32-14.3-32-32s32-32 32-32s32 14.3 32 32zm96 32c-17.7 0-32 14.3-32 32v64h128V320c0-17.7-14.3-32-32-32H384zM320 480H448v32H320v-32z"/>
  </svg>
);


// Data for each section to make the component more dynamic and easier to update
const sectionsData = [
  {
    id: "about",
    title: "About Our School",
    icon: UsersIcon,
    iconColor: "text-blue-500",
    titleColor: "text-blue-600",
    text: "New Generation High School follows the CBSE curriculum, offering a balanced blend of academics, creativity, and values. We emphasize activity-based learning, strong fundamentals, and skill development to nurture curiosity and confidence. Our goal is to ensure holistic growth, preparing students for future challenges in a joyful, engaging environment.",
    image: imageUrls.about,
  },
  {
    id: "academics",
    title: "Academics",
    icon: GraduationCapIcon,
    iconColor: "text-purple-500",
    titleColor: "text-purple-600",
    text: "At our school, we follow a child-centric curriculum that balances CBSE and State Board standards, focusing on the holistic development of every learner from Kindergarten to High School.In Kindergarten (Pre-KG to UKG), learning is play-based and activity-oriented, helping children build foundational skills in language, numbers, social interaction, and motor development in a joyful and nurturing environment.In the Primary Section (Classes I to V – CBSE), the curriculum emphasizes conceptual understanding in core subjects like English, Mathematics, Environmental Studies, and Hindi, along with co-curricular areas such as Art, Computer Education, and Physical Development. This approach nurtures curiosity, creativity, and confidence, laying a strong foundation for lifelong learning.From Middle to High School (Classes VI to X – State Board), the curriculum focuses on strengthening academic knowledge and preparing students for future educational and career opportunities. Core subjects include English, Mathematics, Science, and Social Studies, along with regional languages (Telugu/Hindi). Additionally, Computer Education, Physical Education, Value Education, and Co-curricular activities ensure the balanced growth of students. Our teaching methods combine conceptual clarity, exam preparedness, and skill-building, enabling learners to excel in board examinations while also developing life skills, discipline, and a sense of responsibility.",
    image: imageUrls.academics,
  },
  {
    id: "aim",
    title: "Our Aim",
    icon: LightbulbIcon,
    iconColor: "text-yellow-500",
    titleColor: "text-green-600",
    text: "To nurture every child into a confident, responsible, and knowledgeable individual by blending academic excellence with moral values, creativity, and life skills — shaping leaders for tomorrow with a strong foundation today.",
    image: imageUrls.aim,
  },
  {
    id: "campus",
    title: "About Our Campus",
    icon: BuildingIcon,
    iconColor: "text-gray-500",
    titleColor: "text-gray-600",
    text: "25 Years of Excellence in Education For the past 25 years, New Generation School has been a become of quality education, shaping young minds with knowledge, discipline, and values. What began as a humble vision has now grown into a respected institution, trusted by parents and cherished by students.",
    image: imageUrls.campus,
  },
  {
    id: "mission",
    title: "Our Mission",
    icon: ChalkboardTeacherIcon,
    iconColor: "text-pink-500",
    titleColor: "text-orange-600",
    text: "Our mission is to provide quality education that combines academics with skill-based learning. We aim to nurture every child’s potential through activities in digital literacy, communication, creativity, leadership, and life skills, preparing them to succeed in both education and real life.",
    image: imageUrls.mission,
  },
  {
    id: "founder",
    title: "Founder Of NG",
    icon: StarIcon,
    iconColor: "text-green-500",
    titleColor: "text-green-600",
    text: "N.R.K.A. Prasad, Founder of New Generation School and District Secretary of APPUSMA, brings with him over 25 years of dedicated experience in the field of education. A true visionary, he has consistently worked to make quality education accessible to students from all walks of life. His leadership focuses on academic excellence, innovation in teaching, and holistic development that nurtures both knowledge and character. Under his guidance, New Generation School has grown into a trusted institution where children are encouraged to learn with curiosity, grow with confidence, and succeed with values. His dual role as an educationist and community leader through APPUSMA reflects his lifelong commitment to empowering schools, teachers, and students for a brighter tomorrow.Driven by his belief that education is the most powerful tool for change, Mr. Prasad has always emphasized inclusive learning, discipline, and moral values alongside academics. He envisions New Generation School as not just a place of learning but as a platform where young minds are prepared to become responsible citizens and future leaders. His dedication, perseverance, and vision continue to inspire both teachers and students, making him a guiding light in the journey of educational excellence.",
    image: imageUrls.founder,
  },
  {
    id: "principal",
    title: "Principal",
    icon: CrownIcon,
    iconColor: "text-yellow-500",
    titleColor: "text-yellow-600",
    text: " N. Baby Rose Lin With a strong vision for academic excellence and holistic development, Mrs. N. Baby Rose Lin has been leading New Generation School as the Principal with dedication and commitment. Under her guidance, the school emphasizes discipline, innovation in teaching, and nurturing each student’s potential to achieve success in academics as well as personal growth. She firmly believes in creating a supportive environment where students, teachers, and parents work together to build a brighter future.",
    image: imageUrls.principal,
  },
  {
    id: "manager",
    title: "Managing Director, N.G. School",
    icon: UserTieIcon,
    iconColor: "text-teal-500",
    titleColor: "text-teal-600",
    text: "With a strong academic background in Agriculture (M.Sc Agri) and a vision for quality education, N. Bhavana Stella has been leading N.G. School as its Managing Director with dedication and commitment. She believes in nurturing young minds with a perfect balance of knowledge, discipline, and values.Her leadership focuses on providing innovative teaching methods, student-centered learning, and holistic development for every child. She plays a key role in strengthening the school’s academic excellence while also ensuring that students are prepared for real-life challenges with confidence and character.Her guiding principle is to make education accessible, purposeful, and transformative, turning N.G. School into a hub of learning and growth for future.",
    image: imageUrls.manager, // Corrected URL
  },
  {
    id: "administrator",
    title: " Administrative Manager",
    icon: ClipboardIcon,
    iconColor: "text-amber-500",
    titleColor: "text-amber-600",
    text: "Ms. N. Vandana Stella, MBA, serves as the Administrative Manager of New Generation School, overseeing the smooth functioning of the entire campus. With strong organizational and leadership skills, she manages day-to-day operations, coordinates academic and non-academic activities, and ensures an efficient learning environment for both students and staff.Her dedication, systematic planning, and people-centric approach play a vital role in maintaining discipline, implementing school policies, and supporting the vision of holistic education at New Generation School. ",
    image: imageUrls.administrator,
  },
];

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
        
        .react-icon-hover {
            transition: transform 0.3s ease, color 0.3s ease;
        }
        .react-icon-hover:hover {
            transform: scale(1.2) rotate(15deg);
        }
        `}
      </style>

      {sectionsData.map((section, index) => {
        const IconComponent = section.icon;
        const isReversed = index % 2 !== 0; // Check if the index is odd to reverse the layout
        
        return (
          <div
            key={section.id}
            className={`flex flex-col lg:flex-row items-center gap-12 my-16 ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center p-4">
              <div className="image-container relative rounded-[2.5rem] shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-3xl w-full h-auto"
                />
              </div>
            </div>

            {/* Content Column */}
            <div
              className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:-rotate-2"
              onMouseEnter={() => handleMouseEnter(section.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center mb-4">
                <IconComponent
                  size={40}
                  className={`${section.iconColor} mr-4 react-icon-hover ${
                    hoveredIcon === section.id ? `${section.iconColor.replace('500', '800')}` : ""
                  }`}
                />
                <h3 className={`text-4xl font-bubblegum ${section.titleColor} drop-shadow-md`}>
                  {section.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                {section.text}
              </p>
            </div>
          </div>
        );
      })}
    </SectionWrapper>
  );
}

export default AboutSection;
