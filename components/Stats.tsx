"use client";

import React from "react";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, label: "Satisfied Clients", value: "500+" },
  { icon: Award, label: "Years of Experience", value: "25+" },
  { icon: TrendingUp, label: "Projects Completed", value: "10,000+" },
  { icon: Target, label: "Quality Standards", value: "ISO Certified" },
];

const Stats: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
