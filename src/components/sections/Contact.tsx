import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl flex items-center justify-center">
            <IconContext.Provider value={{ size: '32px', className: 'mr-2' }}>
              <FaEnvelope />
            </IconContext.Provider>
            Contact
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's connect and discuss how we can work together!
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <IconContext.Provider value={{ size: '24px', className: 'mr-2' }}>
              <a
                href="mailto:devang.shah@example.com"
                className="text-teal-600 hover:text-teal-500 flex items-center"
              >
                <FaEnvelope />
                Email
              </a>
              <a
                href="https://linkedin.com/in/devangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-500 flex items-center"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/devangshah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-500 flex items-center"
              >
                <FaGithub />
                GitHub
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
