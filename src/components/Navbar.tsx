'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl md:text-3xl font-bold text-[#00B4D8]">
              CodeAI
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#00B4D8] hover:text-white hover:bg-[#2A2A2A] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors duration-200 ${
                  pathname === '/' 
                    ? 'text-[#00B4D8]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('courses-section')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors duration-200"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('testimonials-section')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base lg:text-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-3 rounded-md text-base font-medium ${
              pathname === '/' 
                ? 'text-[#00B4D8]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('courses-section')}
            className="text-gray-300 hover:text-white block w-full text-left px-3 py-3 rounded-md text-base font-medium"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection('testimonials-section')}
            className="text-gray-300 hover:text-white block w-full text-left px-3 py-3 rounded-md text-base font-medium"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white block w-full text-left px-3 py-3 rounded-md text-base font-medium"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 