import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiYoutube,
  SiGithub,
  SiFacebook,
  SiLinkedin,
  SiX,
} from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 py-6 bg-primary text-white">
      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-4 mb-6 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
        <a
          href="mailto:ngesa.dev@gmail.com"
          className="flex items-center space-x-2 hover:underline"
        >
          <FaEnvelope className="text-yellow-400 text-xl" />
          <span className="text-sm md:text-base">ngesa.dev@gmail.com</span>
        </a>

        <a
          href="tel:+254703261083"
          className="flex items-center space-x-2 hover:underline"
        >
          <FaPhone className="text-yellow-400 text-xl" />
          <span className="text-sm md:text-base">+254 703261083</span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="https://x.com/ngesa_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX className="text-white text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://youtube.com/@Topstories254"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiYoutube className="text-red-600 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/ngesa-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://www.linkedin.com/in/ngesa-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="text-blue-700 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://wa.me/254703261083"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-400 text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://facebook.com/ngesa.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
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
