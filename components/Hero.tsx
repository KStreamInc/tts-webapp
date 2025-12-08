"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Wrench, Phone } from "lucide-react";

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] bg-cover bg-center text-white overflow-hidden">
      {/* Background Image with darkening filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero-bg.webp')`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content (text, buttons) — unaffected by filter */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 pb-5">
          Dyeing the Future Responsibly.
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 p-4 rounded-lg inline-block">
          Sri Lanka’s Premier Industrial Grade Dye Supplier
        </p>

        <div className="flex justify-center gap-4">
          <button 
            onClick={() => router.push("/services")}
            className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition-all"
          >
            <Wrench className="w-5 h-5" />
            Services
          </button>

          <button 
            onClick={() => router.push("/contact")}
            className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition"
          >
            <Phone className="w-5 h-5" />
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;