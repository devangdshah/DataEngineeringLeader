import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl">
            Leadership & Projects
          </h2>
          
          {/* Leadership Initiatives Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Leadership Initiatives</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">Enterprise Data Platform</h4>
                <p className="mt-2 text-gray-600">
                  Led the design and implementation of a company-wide data platform serving multiple business units, 
                  resulting in improved data accessibility and reduced time-to-insight by 60%.
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Architected scalable data infrastructure</li>
                  <li>Implemented real-time data processing</li>
                  <li>Reduced data latency by 70%</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">Data Governance Initiative</h4>
                <p className="mt-2 text-gray-600">
                  Spearheaded a comprehensive data governance program, establishing data quality standards and 
                  implementing monitoring systems across the organization.
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Developed data quality framework</li>
                  <li>Implemented automated monitoring</li>
                  <li>Established data ownership model</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">Team Transformation</h4>
                <p className="mt-2 text-gray-600">
                  Transformed a traditional data team into a modern, agile data engineering organization, 
                  implementing best practices and improving delivery velocity by 40%.
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Implemented agile methodologies</li>
                  <li>Established CI/CD pipelines</li>
                  <li>Enhanced team collaboration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">Proactive Delivery Defects Resolution</h4>
                <p className="mt-2 text-gray-600">
                  Implemented a proactive approach to identify and resolve delivery defects before they impact Customer Experience, 
                  significantly improving system reliability and customer satisfaction.
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Developed automated defect detection system</li>
                  <li>Reduced production incidents by 45%</li>
                  <li>Improved mean time to resolution by 60%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Projects Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Projects</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">[Project Name]</h4>
                <p className="mt-2 text-gray-600">
                  [Project description]
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>[Technical achievement 1]</li>
                  <li>[Technical achievement 2]</li>
                  <li>[Technical achievement 3]</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
                <h4 className="text-xl font-bold text-teal-600">[Project Name]</h4>
                <p className="mt-2 text-gray-600">
                  [Project description]
                </p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>[Technical achievement 1]</li>
                  <li>[Technical achievement 2]</li>
                  <li>[Technical achievement 3]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
