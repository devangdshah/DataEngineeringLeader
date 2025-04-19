import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <FaEnvelope className="mr-2" size={32} />
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
              <FaEnvelope className="mr-2" size={24} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/devangshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-500 flex items-center"
            >
              <FaLinkedin className="mr-2" size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/devangshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-500 flex items-center"
            >
              <FaGithub className="mr-2" size={24} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
