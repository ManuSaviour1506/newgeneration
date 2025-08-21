import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import NewsSection from '../components/sections/NewsSection';
import EventsSection from '../components/sections/EventsSection';
import GallerySection from '../components/sections/GallerySection';
import AdmissionsSection from "../components/sections/AdmissionsSection";
import Footer from "../components/common/Footer";
import ContactSection from "../components/sections/ContactSection";

function MainWebsite() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />

        <EventsSection />
        <NewsSection />
        <EventsSection />

        <GallerySection />
        <ContactSection />
        {/* Remove FieldTripsSection and StaffSection from here */}
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


export default MainWebsite;
