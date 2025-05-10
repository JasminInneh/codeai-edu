import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout; 