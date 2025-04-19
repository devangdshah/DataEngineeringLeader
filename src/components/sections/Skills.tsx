import React from 'react';
import { FaTools, FaUsersCog, FaDatabase, FaCloud } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <FaTools style={{ marginRight: '0.5rem', fontSize: '32px' }} />
            Skills & Expertise
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <FaUsersCog style={{ marginRight: '0.5rem', fontSize: '24px', color: '#0D9488' }} />
                <h3 className="text-xl font-bold text-teal-600">Technical Leadership</h3>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Team Leadership & Mentoring</li>
                <li>Strategic Planning & Execution</li>
                <li>Cross-functional Collaboration</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <FaDatabase style={{ marginRight: '0.5rem', fontSize: '24px', color: '#0D9488' }} />
                <h3 className="text-xl font-bold text-teal-600">Data Engineering</h3>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Data Architecture & Design</li>
                <li>ETL/ELT Pipeline Development</li>
                <li>Data Quality & Governance</li>
                <li>Big Data Processing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <FaCloud style={{ marginRight: '0.5rem', fontSize: '24px', color: '#0D9488' }} />
                <h3 className="text-xl font-bold text-teal-600">Cloud & Technologies</h3>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>AWS, Azure, GCP</li>
                <li>Apache Spark, Kafka</li>
                <li>Python, SQL, Scala</li>
                <li>Data Warehousing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
