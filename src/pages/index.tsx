'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1A1A1A]">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Elements with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A]" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00B4D8] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            Learn to Code with
            <span className="text-[#00B4D8] block mt-2">Artificial Intelligence</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            Master programming through interactive AI-powered lessons, real-world projects, and personalized feedback.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          >
            <button className="px-8 py-3 bg-[#00B4D8] text-white rounded-lg font-medium hover:bg-[#0096B7] transition-colors duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-[#00B4D8] text-[#00B4D8] rounded-lg font-medium hover:bg-[#00B4D8] hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{
            transform: `translate(-50%, ${scrollY * 0.1}px)`,
          }}
        >
          <svg
            className="w-6 h-6 text-[#00B4D8]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <motion.section 
        id="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00B4D8] rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
              >
                About CodeAI
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-6 text-gray-300"
              >
                <p className="text-lg">
                  Welcome to CodeAI, a learning platform designed to help you unlock the power of modern AI development tools like GitHub Copilot and Cursor.
                </p>

                <p className="text-lg">
                  At its core, CodeAI is the passion project of one developer (that's me!)—a space where I combine my experience in curriculum design and tech development to share what I learn, create engaging courses, and help others master the art of building applications with AI assistance.
                </p>

                <p className="text-lg">
                  This platform isn't just about teaching; it's about learning and growing together. As I explore the latest in AI coding tools, I'm committed to sharing insights, resources, and practical guidance to help you become a more confident, efficient, and creative developer.
                </p>

                <p className="text-lg">
                  Whether you're curious about how Copilot can supercharge your coding workflow or how Cursor can transform your development experience, you'll find hands-on tutorials, thoughtful lessons, and a supportive learning journey here at CodeAI.
                </p>

                <p className="text-lg font-semibold text-[#00B4D8]">
                  Let's build smarter, faster, and better—together.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 flex justify-center"
              >
                <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 150 C50 100, 150 50, 200 50 C250 50, 350 100, 350 150 C350 200, 250 250, 200 250 C150 250, 50 200, 50 150" stroke="#00B4D8" strokeWidth="2" fill="none"/>
                  <circle cx="200" cy="150" r="30" fill="#00B4D8" fillOpacity="0.2"/>
                  <path d="M180 140 L220 140 M180 160 L220 160" stroke="#00B4D8" strokeWidth="2"/>
                  <path d="M150 100 L250 100 M150 200 L250 200" stroke="#00B4D8" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
