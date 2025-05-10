import React from 'react';
import Navigation from './Navigation';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-[#1A1A1A] ${inter.className}`}>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout; 