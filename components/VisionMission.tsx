"use client";

import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To provide exceptional dyeing and textile processing services that exceed our clients'
            expectations while maintaining sustainable practices and contributing to the growth of
            Sri Lanka's apparel industry.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be the most trusted and innovative textile solutions provider in the region,
            recognized for our quality, reliability, and commitment to environmental
            sustainability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
