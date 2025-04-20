import React from 'react';

const PDFResume: React.FC = () => {
  return (
    <div className="pdf-resume p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-600 mb-2">Devang Shah</h1>
        <p className="text-gray-600">Senior Data Engineering Leader</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500">
          <span>Boston, MA</span>
          <span>|</span>
          <span>devang.shah@example.com</span>
          <span>|</span>
          <span>LinkedIn: linkedin.com/in/devangshah</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Professional Summary</h2>
        <p className="text-gray-700">
          Accomplished Data Engineering Leader with 15+ years of experience in building scalable data platforms and leading high-performing teams. 
          Proven track record in cloud architecture, data governance, and driving business value through data-driven insights.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Professional Experience</h2>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-800">Head of Data Analytics</h3>
            <span className="text-gray-600">April 2025 - Present</span>
          </div>
          <p className="text-gray-600 mb-2">ZoomInfo, Boston, MA</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Leading a team of 25+ data professionals in building enterprise data platforms</li>
            <li>Reduced data processing costs by 40% through cloud optimization</li>
            <li>Implemented real-time analytics solutions serving 1M+ users</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-800">Senior Data Engineering Manager</h3>
            <span className="text-gray-600">March 2023 - April 2025</span>
          </div>
          <p className="text-gray-600 mb-2">Wayfair, Boston, MA</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Managed a team of 15 data engineers and analysts</li>
            <li>Built scalable data pipelines processing 1TB+ daily</li>
            <li>Improved data quality by 60% through automated monitoring</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-800">Data Engineering Manager</h3>
            <span className="text-gray-600">2018 - 2023</span>
          </div>
          <p className="text-gray-600 mb-2">Amazon, Seattle, WA</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Led development of real-time analytics platform</li>
            <li>Achieved 99.99% data pipeline reliability</li>
            <li>Reduced operational costs by $2M annually</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Data Engineering</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Apache Spark, Hadoop, Kafka</li>
              <li>Python, Java, Scala</li>
              <li>SQL, NoSQL databases</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Cloud & DevOps</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>AWS, Azure, GCP</li>
              <li>Docker, Kubernetes</li>
              <li>CI/CD, Terraform</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Education</h2>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-gray-800">Master of Science in Computer Science</h3>
            <p className="text-gray-600">University of Massachusetts, Amherst</p>
          </div>
          <span className="text-gray-600">2008</span>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>AWS Certified Solutions Architect - Professional</li>
          <li>Google Cloud Professional Data Engineer</li>
          <li>Databricks Certified Data Engineer</li>
        </ul>
      </div>
    </div>
  );
};

export default PDFResume; 