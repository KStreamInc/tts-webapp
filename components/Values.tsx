"use client";

import React from "react";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const QUALITIES = [
  { title: "Trust" },
  { title: "Honesty" },
  { title: "Mutual Respect" },
  { title: "Teamwork" },
  { title: "Knowledge" },
  { title: "Market Exposure" },
  { title: "Desire for Excellence" },
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

const Values: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-14 relative w-full">
          <span className="relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-blue-800 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
            Our Core Values
          </span>
        </h3>

        {/* Layout Logic same as previous */}
        <div className="flex flex-col items-center gap-6">

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
            {QUALITIES.slice(0, 4).map((q, i) => (
              <ValueCard key={i} title={q.title} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl md:max-w-[calc(75%_-_0.75rem)] md:mx-auto">
            {QUALITIES.slice(4, 6).map((q, i) => (
              <ValueCard key={i} title={q.title} />
            ))}

            {/* Last item */}
            <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
              <ValueCard title={QUALITIES[6].title} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable card
const ValueCard = ({ title }: { title: string }) => (
  <div className="group bg-white rounded-2xl shadow-md p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col items-center h-full">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-800/10 via-blue-600/10 to-blue-400/10 blur-3xl rounded-2xl"></div>
    <div className="relative z-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-5 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
      {getIcon(title)}
    </div>
    <h4 className="relative z-10 text-xl font-semibold text-blue-900 text-center tracking-wide">{title}</h4>
    <div className="w-0 h-[2px] bg-blue-700 mt-2 transition-all duration-500 group-hover:w-16"></div>
  </div>
);

export default Values;
