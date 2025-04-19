import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-teal-600 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white font-bold hover:text-teal-100 transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-teal-100 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-teal-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-teal-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-teal-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-teal-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-teal-100 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-teal-100 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-teal-100 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-teal-100 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-teal-100 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-teal-100 hover:bg-teal-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
