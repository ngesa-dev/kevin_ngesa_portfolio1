import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { SiYoutube, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white">
      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-4 mb-6 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <span className="text-sm md:text-base">ngesak2002@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-yellow-400 text-xl" />
          <span className="text-sm md:text-base">+254 112339230</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="https://x.com/Kevingesa98" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://youtube.com/@Topstories254" target="_blank" rel="noopener noreferrer">
          <SiYoutube className="text-red-600 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/Kevin-Ngesa" target="_blank" rel="noopener noreferrer">
          <SiGithub className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SiInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/kevin-ngesa-213251352/" target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a href="https://wa.me/254112339230" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-400 text-2xl hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-4 w-full max-w-sm mx-auto"></div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>
          &copy; {currentYear} <span className="font-semibold">Kevin Ngesa</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
