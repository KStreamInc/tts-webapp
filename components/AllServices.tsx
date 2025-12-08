"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SERVICES } from "../constants/Services";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AllServices: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const index = SERVICES.findIndex(s => slugify(s.title) === hash);
      if (index !== -1) {
        setOpenIndex(index);
      }
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
          Our Services
        </h2>

        <div className="space-y-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              id={slugify(service.title)}
              className="border-b border-gray-200 pb-2 scroll-mt-24"
            >

              {/* Header */}
              <button
                onClick={() => toggleService(index)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <div className="flex items-center gap-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-900" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-900" />
                  )}
                  <span className="text-xl md:text-2xl font-semibold text-blue-900">
                    {service.title}
                  </span>
                </div>
              </button>

              {/* Expanded content with animation */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-8 space-y-10"
                  >
                    {/* IMAGE */}
                    <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                      <div className="relative w-full h-80 md:h-[420px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="max-w-3xl mx-auto text-center">
                      {service.subtitle && (
                        <p className="text-lg text-blue-700 font-semibold mb-4">
                          {service.subtitle}
                        </p>
                      )}

                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {service.features && (
                        <ul className="space-y-3 text-left mx-auto max-w-xl">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <span className="text-blue-700 text-xl mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Collapse Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => setOpenIndex(null)}
                        className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium shadow hover:bg-blue-800 transition"
                      >
                        Collapse
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
