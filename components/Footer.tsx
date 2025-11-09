"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Fabric Dyeing",
    "Garment Washing",
    "Elastic Dyeing",
    "Sample Dyeing",
    "Large Scale Production",
    "Quality Testing"
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Quality Standards", href: "#quality" },
    { label: "Contact Us", href: "#contact" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "#privacy" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Total Textile Solutions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sri Lanka's leading industrial-grade dye supplier and textile processing facility with over 25 years of excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-blue-800 hover:bg-blue-700 p-2.5 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-blue-300" />
                <span className="text-gray-300">
                  Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-300" />
                <a 
                  href="tel:+94XXXXXXXXX" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +94 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-300" />
                <a 
                  href="mailto:info@totaltextile.lk" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@totaltextile.lk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-blue-300" />
                <span className="text-gray-300">
                  Mon - Fri: 8:00 AM - 5:00 PM<br />
                  Sat: 8:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {currentYear} Total Textile Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a 
              href="#privacy" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-6 border-t border-blue-800">
          <p className="text-center text-gray-400 text-sm">
            Website by <span className="text-blue-300 font-medium">kStream Technologies</span>
          </p>
        </div>
      </div>

      {/* Quality Certifications Bar */}
      <div className="bg-blue-950 border-t border-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm">
            ISO Certified | Quality Assured | Environmentally Responsible
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;