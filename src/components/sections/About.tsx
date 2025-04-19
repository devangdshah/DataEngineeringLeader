import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <FaUserTie className="mr-2" size={32} />
            About Me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            A seasoned Data Engineering Leader with extensive experience in building and leading high-performing teams, 
            architecting enterprise-scale data platforms, and driving data strategy across organizations. 
            Proven track record in delivering complex data solutions that drive business value and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
