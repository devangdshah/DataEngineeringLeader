import React from 'react';
import { FaProjectDiagram, FaDatabase, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <IconContext.Provider value={{ size: '32px', className: 'mr-2' }}>
              <FaProjectDiagram />
            </IconContext.Provider>
            Projects
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <IconContext.Provider value={{ size: '24px', className: 'mr-2 text-teal-600' }}>
                  <FaDatabase />
                </IconContext.Provider>
                <h3 className="text-xl font-bold text-teal-600">Enterprise Data Platform</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Designed and implemented a scalable data platform processing terabytes of data daily, 
                enabling real-time analytics and machine learning capabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <IconContext.Provider value={{ size: '24px', className: 'mr-2 text-teal-600' }}>
                  <FaShieldAlt />
                </IconContext.Provider>
                <h3 className="text-xl font-bold text-teal-600">Data Governance Framework</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Developed a comprehensive data governance framework ensuring data quality, security, 
                and compliance across the organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <IconContext.Provider value={{ size: '24px', className: 'mr-2 text-teal-600' }}>
                  <FaChartLine />
                </IconContext.Provider>
                <h3 className="text-xl font-bold text-teal-600">Streaming Analytics Pipeline</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Built a real-time streaming analytics pipeline processing millions of events per second, 
                enabling instant insights and decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
