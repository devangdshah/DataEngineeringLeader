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
        <div className="mt-12 space-y-8">
          {/* ZoomInfo Experience */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Head of Data Analytics</h3>
            <p className="text-teal-600 font-semibold">ZoomInfo</p>
            <p className="text-gray-500">Apr 2025 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Provided data-driven insights that directly elevated customer experience, increased operational efficiency, and improved compliance performance</li>
              <li>Defined and executed transformative vision and strategy for Go to Market Analytics, aligning data strategy, compliance, platform, sales and finance leadership</li>
              <li>Managed remote global team of engineers across different timezones</li>
              <li>Led cross-functional collaboration between Data Engineering, Data Science, Sales, and Finance teams</li>
              <li>Converted complex business requirements into actionable analytics strategies, delivering quantifiable gains in customer satisfaction and operational performance</li>
            </ul>
          </div>

          {/* Wayfair Experience */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Associate Director, Data</h3>
            <p className="text-teal-600 font-semibold">Wayfair.com | Seattle</p>
            <p className="text-gray-500">Jun 2022 - March 2023</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Led a diverse team of 25 data and BI engineers, fostering cross-functional collaboration and strong organizational partnerships</li>
              <li>Spearheaded data accessibility initiatives using open-source DataHub, enhancing employee data literacy by 40% and improving data management efficiency</li>
              <li>Achieved 19% reduction in data processing time through optimized workflows</li>
              <li>Led transformative data vision and governance strategy that optimized supply chain, saving over $1M yearly and reducing fulfillment times by 15%</li>
              <li>Pioneered data-driven solutions resulting in 10% reduction in error rates and 16% improvement in accuracy</li>
              <li>Developed user-centric data platform that streamlined processes and accelerated market times for initiatives</li>
            </ul>
          </div>

          {/* Amazon Experience */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Senior Software Development Manager</h3>
            <p className="text-teal-600 font-semibold">Amazon.com | Seattle</p>
            <p className="text-gray-500">May 2019 - Jun 2022</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Led organization-wide technology strategy for WW HR Org's data platform</li>
              <li>Built and managed teams supporting HR organization via Batch, Streaming, Data Science, and Product development</li>
              <li>Reduced trouble ticket volume by 51.2% YoY through new tool development and permissions simplification</li>
              <li>Implemented standards and processes for reliable, scalable data environment</li>
              <li>Provided hands-on technical leadership and built inter-team collaboration guidelines</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Manager, Data Engineering</h3>
            <p className="text-teal-600 font-semibold">Amazon.com</p>
            <p className="text-gray-500">May 2016 - Mar 2019</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Led AMZL's labor planning and budget planning system, saving millions through optimized hiring</li>
              <li>Achieved 23% YoY reduction in defects and 21% increase in same-day delivery success</li>
              <li>Established team best practices and standardization across documentation, code version control, and visualization</li>
              <li>Developed and strategized BI & Analytics roadmap aligned with business goals</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Senior Data Architect</h3>
            <p className="text-teal-600 font-semibold">Amazon.com</p>
            <p className="text-gray-500">Mar 2013 - May 2016</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Led BI and Data Engineering team for Mobile Shopping and Marketing Analytics</li>
              <li>Implemented real-time data processing using ELK stack for Amazon's Mobile App</li>
              <li>Established automated data pipelines for Redshift integration and business reporting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Data Engineer</h3>
            <p className="text-teal-600 font-semibold">Amazon.com | Windsor</p>
            <p className="text-gray-500">Mar 2008 - Mar 2011</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Built reporting solutions for Oracle ERP using PL/SQL, Informatica, and OBIEE</li>
              <li>Generated global dashboards for sales and marketing analytics</li>
              <li>Optimized database systems using advanced modeling techniques</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
            <p className="text-teal-600 font-semibold">Satyam Computer Services | India</p>
            <p className="text-gray-500">Jun 2004 - Mar 2008</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Implemented strategic solutions resulting in significant departmental improvements</li>
              <li>Demonstrated strong problem-solving and strategic planning capabilities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
