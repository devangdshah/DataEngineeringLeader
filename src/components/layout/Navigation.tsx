import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      </div>
    </nav>
  );
};

export default Navigation;
