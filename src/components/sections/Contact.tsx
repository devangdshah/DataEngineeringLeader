import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50 to-white">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Let's connect and discuss how we can work together to solve your data challenges.
          </p>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="mailto:devang.shah@example.com"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/devangshah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/devangshah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
