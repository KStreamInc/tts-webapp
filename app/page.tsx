import React from 'react';
import NavBar  from '@/components/NavBar';
import HeroSection from '@/components/Hero';
import Services from '@/components/Services';
import ServicesPreview from '@/components/ServicesPreview';
import ContactUs from '@/components/ContactUs';
import AboutUs from '@/components/AboutUs';


export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <Services />
      
      <HeroSection /> */}
      <ServicesPreview />
      <ContactUs />
      <AboutUs />
    </>
  );
}
