"use client";

import React from "react";
import Image from "next/image";
import { SERVICES } from "../constants/Services";

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Services
        </h2>

        {/* Services Flex Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
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
      </div>
    </section>
  );
};

export default ServicesSection;
