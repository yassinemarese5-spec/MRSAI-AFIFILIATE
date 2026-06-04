import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsGrid } from './components/ToolsGrid';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog') {
        setCurrentView('blog');
      } else {
        setCurrentView('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <ToolsGrid />
          </>
        ) : (
          <Blog />
        )}
      </main>

      <Footer />
    </div>
  );
}
