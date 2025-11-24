"use client";

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
          About Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Sri Lanka's Leading Industrial Grade Dye Supplier and Textile Solutions Provider
        </p>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
            <div className="flex items-center justify-center h-full text-gray-400">
              [Image Placeholder]
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Total Textile Solutions is a premier industrial-grade dye supplier and textile
              processing facility based in Sri Lanka. With over 25 years of experience in the
              apparel industry, we have established ourselves as a trusted partner for businesses
              seeking high-quality dyeing services.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our state-of-the-art facilities and experienced team enable us to handle projects
              of any scale, from small sample dyeing to large-scale production runs. We
              specialize in fabric dyeing, garment washing, elastic dyeing, and various textile
              processing services.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We are committed to delivering excellence in every project while maintaining
              environmentally responsible practices and fostering long-term partnerships with our
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
