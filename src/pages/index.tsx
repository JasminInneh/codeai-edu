'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Geist, Geist_Mono } from "next/font/google";

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
    </main>
  );
}
