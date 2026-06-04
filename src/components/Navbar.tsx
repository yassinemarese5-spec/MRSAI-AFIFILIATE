import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                <Command className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-gray-900">MRS<span className="text-brand-600">AI</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#categories" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Categories</a>
            <a href="#guide" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Guide</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a 
              href="#resources" 
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Resources
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 px-4 py-4 shadow-lg flex flex-col space-y-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Home</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Blog</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Categories</a>
          <a href="#guide" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">Guide</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">About</a>
          <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-center bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Resources</a>
        </div>
      )}
    </header>
  );
}
