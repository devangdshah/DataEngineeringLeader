import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-teal-50 to-white">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Skills & Expertise
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Comprehensive skill set in data engineering, leadership, and cloud technologies
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Technical Leadership</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Team Leadership & Mentoring</li>
              <li>Technical Strategy & Architecture</li>
              <li>Project Management</li>
              <li>Stakeholder Communication</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Data Engineering</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Data Pipeline Development</li>
              <li>ETL/ELT Processes</li>
              <li>Data Modeling & Warehousing</li>
              <li>Data Quality & Governance</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Cloud & Technologies</h3>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>AWS & Azure Cloud Services</li>
              <li>Big Data Technologies</li>
              <li>Streaming & Batch Processing</li>
              <li>Containerization & Orchestration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
