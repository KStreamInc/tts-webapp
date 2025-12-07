"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../constants/Services";

const ServicesSection: React.FC = () => {
  // Show only first 3 services
  const visibleServices = SERVICES.slice(0, 3);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Our Services
        </h2>

        {/* Grid: 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Fixed-height image */}
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content grows to fill space */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>

                {service.subtitle && (
                  <p className="text-sm text-blue-700 font-medium mb-3">
                    {service.subtitle}
                  </p>
                )}

                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-blue-800 hover:to-blue-600 hover:shadow-xl transition-all">
              See All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;