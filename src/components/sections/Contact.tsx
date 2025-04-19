import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <FaEnvelope style={{ marginRight: '0.5rem', fontSize: '32px' }} />
            Contact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's connect and discuss how we can work together!
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="mailto:devang.shah@example.com"
              className="text-teal-600 hover:text-teal-500 flex items-center"
            >
              <FaEnvelope style={{ marginRight: '0.5rem', fontSize: '24px' }} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/devangshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-500 flex items-center"
            >
              <FaLinkedin style={{ marginRight: '0.5rem', fontSize: '24px' }} />
              LinkedIn
            </a>
            <a
              href="https://github.com/devangshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-500 flex items-center"
            >
              <FaGithub style={{ marginRight: '0.5rem', fontSize: '24px' }} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
