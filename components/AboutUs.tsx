"use client";

import React from "react";
import Image from "next/image";
import { Award, Users, Target, TrendingUp } from "lucide-react";

// Mock QUALITIES data since we don't have the import
const QUALITIES = [
  { title: "Trust" },
  { title: "Honesty" },
  { title: "Mutual Respect" },
  { title: "Teamwork" },
  { title: "Knowledge" },
  { title: "Market Exposure" },
  { title: "Desire for Excellence" },
];

const AboutUs: React.FC = () => {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "500+" },
    { icon: Award, label: "Years of Experience", value: "25+" },
    { icon: TrendingUp, label: "Projects Completed", value: "10,000+" },
    { icon: Target, label: "Quality Standards", value: "ISO Certified" },
  ];

  const getIcon = (title: string) => {
    switch (title) {
      case "Trust":
        return <Award className="w-14 h-14" />;
      case "Honesty":
        return <Target className="w-14 h-14" />;
      case "Mutual Respect":
      case "Teamwork":
        return <Users className="w-14 h-14" />;
      case "Knowledge":
      case "Market Exposure":
        return <TrendingUp className="w-14 h-14" />;
      case "Desire for Excellence":
        return <Award className="w-14 h-14" />;
      default:
        return <Award className="w-14 h-14" />;
    }
  };

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
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 mb-20">
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

        {/* Our Values - Enhanced */}
        <div className="mb-20 relative">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-14 relative inline-block w-full">
            <span className="relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-blue-800 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
              Our Core Values
            </span>
          </h3>

          {/* Desktop: 2 rows (4 + 3), Mobile: 4 rows (2 + 2 + 2 + 1) */}
          <div className="flex flex-col items-center gap-6">
            {/* Row 1: First 4 items on desktop, first 2 on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
              {QUALITIES.slice(0, 4).map((quality, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col items-center h-full"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-800/10 via-blue-600/10 to-blue-400/10 blur-3xl rounded-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-5 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(quality.title)}
                  </div>

                  <h4 className="relative z-10 text-xl font-semibold text-blue-900 text-center tracking-wide">
                    {quality.title}
                  </h4>
                  <div className="w-0 h-[2px] bg-blue-700 mt-2 transition-all duration-500 group-hover:w-16"></div>
                </div>
              ))}
            </div>

            {/* Row 2: Last 3 items on desktop, items 5-6 on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl md:max-w-[calc(75%_-_0.75rem)] md:mx-auto">
              {QUALITIES.slice(4, 6).map((quality, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col items-center h-full"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-800/10 via-blue-600/10 to-blue-400/10 blur-3xl rounded-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-5 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(quality.title)}
                  </div>

                  <h4 className="relative z-10 text-xl font-semibold text-blue-900 text-center tracking-wide">
                    {quality.title}
                  </h4>
                  <div className="w-0 h-[2px] bg-blue-700 mt-2 transition-all duration-500 group-hover:w-16"></div>
                </div>
              ))}
              
              {/* Item 7: Shows in row 2 on desktop, row 4 on mobile */}
              <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
                <div className="group bg-white rounded-2xl shadow-md p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col items-center h-full w-full md:w-auto">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-800/10 via-blue-600/10 to-blue-400/10 blur-3xl rounded-2xl"></div>

                  {/* Icon */}
                  <div className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-5 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(QUALITIES[6].title)}
                  </div>

                  <h4 className="relative z-10 text-xl font-semibold text-blue-900 text-center tracking-wide">
                    {QUALITIES[6].title}
                  </h4>
                  <div className="w-0 h-[2px] bg-blue-700 mt-2 transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;