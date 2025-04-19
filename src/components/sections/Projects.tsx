import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl">
            Leadership & Projects
          </h2>
          <div className="mt-12 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Enterprise Data Platform</h3>
              <p className="mt-2 text-gray-600">
                Led the design and implementation of a company-wide data platform serving multiple business units, 
                resulting in improved data accessibility and reduced time-to-insight by 60%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Data Governance Initiative</h3>
              <p className="mt-2 text-gray-600">
                Spearheaded a comprehensive data governance program, establishing data quality standards and 
                implementing monitoring systems across the organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Team Transformation</h3>
              <p className="mt-2 text-gray-600">
                Transformed a traditional data team into a modern, agile data engineering organization, 
                implementing best practices and improving delivery velocity by 40%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
