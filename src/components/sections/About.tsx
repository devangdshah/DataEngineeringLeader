import React from 'react';
import { FaUserTie, FaChartLine, FaLightbulb, FaUsers, FaCogs, FaProjectDiagram } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl flex items-center justify-center">
            <FaUserTie className="mr-2 h-8 w-8 text-teal-600" />
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Accomplished technical leader with over 19 years of expertise across data engineering, data science, data analytics, software engineering, and product management.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaChartLine className="mr-2 h-6 w-6 text-teal-600" />
              Key Strengths
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Strategic leadership in data engineering and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Expertise in cloud technologies and microservices architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Proven track record in building scalable enterprise platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Strong background in product strategy and global team management</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaLightbulb className="mr-2 h-6 w-6 text-teal-600" />
              Core Competencies
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Data Engineering & Analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Cloud Architecture (AWS & GCP)</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Team Leadership & Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">✓</span>
                <span>Product Management & Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <FaProjectDiagram className="mr-2 h-6 w-6 text-teal-600" />
            Career Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 flex items-center">
                <FaUsers className="mr-2 h-5 w-5 text-teal-600" />
                Leadership Impact
              </h4>
              <p className="mt-2 text-gray-600">Led and scaled teams of 25+ data professionals, driving innovation and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 flex items-center">
                <FaCogs className="mr-2 h-5 w-5 text-teal-600" />
                Cost Optimization
              </h4>
              <p className="mt-2 text-gray-600">Generated $1M+ annual savings through data-driven supply chain optimization</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 flex items-center">
                <FaChartLine className="mr-2 h-5 w-5 text-teal-600" />
                Technical Innovation
              </h4>
              <p className="mt-2 text-gray-600">Reduced ticket volume by 51.2% through innovative tool development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
