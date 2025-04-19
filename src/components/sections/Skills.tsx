import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl">
            Skills & Expertise
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Technical Leadership</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Team Leadership & Mentoring</li>
                <li>Technical Strategy & Architecture</li>
                <li>Project Management</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Data Engineering</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Data Architecture</li>
                <li>ETL/ELT Pipelines</li>
                <li>Data Warehousing</li>
                <li>Data Quality & Governance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Cloud & Technologies</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>AWS/GCP/Azure</li>
                <li>Big Data Technologies</li>
                <li>Data Modeling</li>
                <li>CI/CD & DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
