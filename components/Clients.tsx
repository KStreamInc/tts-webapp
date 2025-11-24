"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS } from "../constants/Clients";

const TrustedClientsMasonry: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Our Trusted Clients
        </h2>

        {/* Masonry Grid */}
        <div
          className="
            columns-2 
            sm:columns-3 
            md:columns-4 
            lg:columns-5 
            gap-6 
            space-y-6
          "
        >
          {CLIENTS.map((client) => (
            <a
              key={client.name}
              href={client.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block break-inside-avoid group"
            >
              <div
                className="
                  w-full
                  bg-white
                  p-4
                  rounded-xl
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  border
                  border-transparent
                  group-hover:border-blue-500
                  group-hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClientsMasonry;
