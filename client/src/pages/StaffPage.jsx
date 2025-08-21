import React from 'react';
import { useNavigate } from 'react-router-dom';
import StaffSection from '../components/sections/StaffSection';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function StaffPage() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 pt-8">
          <button 
            onClick={() => navigate(-1)} 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-6 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
        <StaffSection />
      </main>
      <Footer />
    </div>
  );
}

export default StaffPage;