"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Get in touch with us for all your dyeing and textile needs. We're here to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Get In Touch
            </h3>

            {/* Contact Cards */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+94 XX XXX XXXX</p>
                  <p className="text-gray-600">+94 XX XXX XXXX</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@totaltextile.lk</p>
                  <p className="text-gray-600">sales@totaltextile.lk</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    123 Industrial Zone,<br />
                    Katunayake, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
