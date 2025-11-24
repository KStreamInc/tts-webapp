import React from 'react';
import NavBar  from '@/components/NavBar';
import HeroSection from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import Footer from '@/components/Footer';
import Clients from '@/components/Clients';
import Stats from '@/components/Stats';


export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Stats />
      <ServicesPreview />
      <Clients />
      <Footer />
    </>
  );
}
