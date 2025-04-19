import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-indigo-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/profile.JPG"
              alt="Devang Shah"
              className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Devang Shah</span>
            <span className="block text-teal-600">Senior Data Engineering Leader</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Leading high-performing data engineering teams to build scalable, reliable, and innovative data solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
