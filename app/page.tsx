import React from 'react';
import NavBar  from '@/components/NavBar';
import HeroSection from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
    </>
  );
}
