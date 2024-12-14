import React from 'react';
import { FileDown, Award, Book } from 'lucide-react';

const Resume = () => {
  const certifications = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera',
      date: '2023'
    },
    {
      title: 'Computational Biology Certificate',
      issuer: 'edX',
      date: '2023'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Resume & Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Download Resume</h3>
              <a
                href="/path-to-resume.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileDown className="mr-2" size={20} />
                Download CV
              </a>
            </div>
            <p className="text-gray-600">
              Comprehensive overview of my academic background, research experience, 
              and technical skills in computational biology and protein design.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <Book className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;