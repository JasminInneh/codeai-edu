import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Get in Touch</h2>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://www.linkedin.com/in/jasmin-inneh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#00B4D8] hover:text-[#0096B7] transition-colors"
          >
            <FaLinkedin className="text-2xl" />
            <span>Jasmin Inneh</span>
          </a>
          
          <a
            href="https://github.com/JasminInneh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#00B4D8] hover:text-[#0096B7] transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span>JasminInneh</span>
          </a>
          
          <a
            href="mailto:jasmininneh@gmail.com"
            className="flex items-center space-x-2 text-[#00B4D8] hover:text-[#0096B7] transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            <span>jasmininneh@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 