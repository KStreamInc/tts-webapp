"use client";

import React from "react";
import Image from "next/image";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { QUALITIES } from "../constants/Qualities";

const AboutUs: React.FC = () => {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: Award, label: "Years of Experience", value: "25+" },
    { icon: TrendingUp, label: "Projects Completed", value: "10,000+" },
    { icon: Target, label: "Quality Standards", value: "ISO Certified" },
  ];

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
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/hero-bg.webp"
              alt="About Total Textile Solutions"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Who We Are
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Total Textile Solutions is a premier industrial-grade dye supplier and textile processing facility based in Sri Lanka. With over 25 years of experience in the apparel industry, we have established ourselves as a trusted partner for businesses seeking high-quality dyeing services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our state-of-the-art facilities and experienced team enable us to handle projects of any scale, from small sample dyeing to large-scale production runs. We specialize in fabric dyeing, garment washing, elastic dyeing, and various textile processing services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are committed to delivering excellence in every project while maintaining environmentally responsible practices and fostering long-term partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional dyeing and textile processing services that exceed our clients' expectations while maintaining sustainable practices and contributing to the growth of Sri Lanka's apparel industry.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and innovative textile solutions provider in the region, recognized for our quality, reliability, and commitment to environmental sustainability.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {QUALITIES.map((quality, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full"
                >
                  <h4 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    {quality.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {quality.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutUs;