import React from 'react';
import { FaBriefcase, FaTasks } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <FaBriefcase style={{ marginRight: '0.5rem', fontSize: '32px' }} />
            Experience
          </h2>
          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-teal-600">Senior Data Engineering Leader</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Leading cross-functional data engineering teams, setting technical direction, and driving the implementation 
                of enterprise data platforms. Responsible for data strategy, architecture decisions, and ensuring the delivery 
                of high-quality, scalable data solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <FaTasks style={{ marginRight: '0.5rem', fontSize: '24px', color: '#0D9488' }} />
                <h3 className="text-xl font-bold text-teal-600">Key Responsibilities</h3>
              </div>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Leading and mentoring data engineering teams</li>
                <li>Architecting and implementing enterprise data platforms</li>
                <li>Driving data strategy and governance initiatives</li>
                <li>Collaborating with stakeholders across the organization</li>
                <li>Ensuring data quality and reliability at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
