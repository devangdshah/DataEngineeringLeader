import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-teal-50">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Explore some of my recent data engineering projects and solutions
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Enterprise Data Platform</h3>
            <p className="mt-2 text-gray-600">
              Designed and implemented a scalable data platform processing 1TB+ daily
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Real-time Analytics Pipeline</h3>
            <p className="mt-2 text-gray-600">
              Built a streaming data pipeline for real-time business analytics
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Data Governance Framework</h3>
            <p className="mt-2 text-gray-600">
              Established comprehensive data governance and quality standards
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">HR Analytics Platform</h3>
            <p className="mt-2 text-gray-600">
              Developed a comprehensive HR analytics platform serving 1M+ employees with real-time insights
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Supply Chain Optimization</h3>
            <p className="mt-2 text-gray-600">
              Created data-driven solutions reducing fulfillment times by 15% and saving $1M+ annually
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900">Proactive Delivery Defect Reduction</h3>
            <p className="mt-2 text-gray-600">
              Implemented real-time defect detection system, reducing delivery issues by 40% through root cause analysis and preventive measures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
