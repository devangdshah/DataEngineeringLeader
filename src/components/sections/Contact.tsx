import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-600 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Interested in discussing data engineering leadership opportunities or collaboration?
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-100">
              <h3 className="text-xl font-bold text-teal-600">Contact Information</h3>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">Email: [Your Email]</p>
                <p className="text-gray-600">LinkedIn: [Your LinkedIn Profile]</p>
                <p className="text-gray-600">Location: [Your Location]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
