import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              CodeAI
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-[#00B4D8]' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <button 
              onClick={scrollToAbout}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 