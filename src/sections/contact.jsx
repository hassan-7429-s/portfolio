import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaInstagram 
} from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat. 
          Feel free to reach out!
        </p>

        {/* Direct email link */}
        <a
          href="mailto:hassansharif2030@gmail.com"
          className="inline-block mb-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition shadow-lg"
        >
          <FaEnvelope className="inline mr-2 mb-1" /> hassansharif2030@gmail.com
        </a>

        {/* Social links */}
        <div className="flex justify-center space-x-6 text-4xl">
          <a
            href="https://github.com/hassan-7429-s"  // ← corrected to your profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-sharif-7a845a1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/yourphonenumber"  // ← replace with your WhatsApp link (e.g., https://wa.me/250....)
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/hassan_sa_24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Location */}
        <p className="text-gray-500 mt-8">📍 Kigali, Rwanda</p>
      </div>
    </section>
  );
};