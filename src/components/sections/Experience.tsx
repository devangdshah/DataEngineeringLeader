import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <svg
              className="mr-2 h-8 w-8 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Experience
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Senior Data Engineering Leader with a proven track record of delivering complex data solutions
          </p>
        </div>
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Senior Data Engineering Leader</h3>
            <p className="mt-2 text-gray-600">Current Company • 2020 - Present</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">Key Responsibilities</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Lead and mentor a team of data engineers and architects</li>
                <li>Design and implement enterprise-scale data platforms</li>
                <li>Drive data strategy and governance initiatives</li>
                <li>Optimize data pipelines and ETL processes</li>
                <li>Collaborate with cross-functional teams to deliver data solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
