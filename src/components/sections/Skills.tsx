import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive technical and leadership skills developed over 19+ years of experience
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Expertise */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Cloud & Infrastructure</h4>
                <p className="text-gray-600">AWS, GCP, Microservices Architecture, Containerization, Kubernetes</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Data Engineering</h4>
                <p className="text-gray-600">ETL/ELT, Data Warehousing, Data Modeling, Data Mesh, Data Quality</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Programming & Tools</h4>
                <p className="text-gray-600">Python, SQL, Statistical Analysis, Data Visualization, Git</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Databases & Storage</h4>
                <p className="text-gray-600">RDBMS, NoSQL, Graph Databases, Data Lakes, Data Warehouses</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Big Data Technologies</h4>
                <p className="text-gray-600">Spark, Hadoop, Kafka, Airflow, Data Streaming</p>
              </div>
            </div>
          </div>

          {/* Leadership & Management */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership & Management</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Team Leadership</h4>
                <p className="text-gray-600">Global Team Management, Talent Development, Mentoring, Performance Management</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Strategic Planning</h4>
                <p className="text-gray-600">Data Strategy, Product Management, Roadmap Development, Innovation</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Cross-functional Collaboration</h4>
                <p className="text-gray-600">Stakeholder Management, Business Alignment, Communication, Negotiation</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Project Management</h4>
                <p className="text-gray-600">Agile Methodologies, Resource Planning, Risk Management, Budgeting</p>
              </div>
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Professional Certifications</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>AWS Certified Solution Architect</li>
                  <li>MIT: Introduction to Computer Science and Programming Using Python</li>
                  <li>MIT: The Analytics Edge</li>
                  <li>Data Engineering Specialization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Education</h4>
                <p className="text-gray-600">Bachelor of Engineering in Computer Engineering, DDIT, Gujarat, India</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Continuous Learning</h4>
                <p className="text-gray-600">Regular participation in industry conferences, workshops, and technical training programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
