import React from 'react';
import { Microscope, BookOpen, Target, Lightbulb } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Research Interests</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Microscope className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Current Focus</h3>
            </div>
            <p className="text-gray-600">
              Exploring the intersection of machine learning and protein design,
              with a particular emphasis on developing novel computational methods
              for predicting protein-protein interactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold">Research Goals</h3>
            </div>
            <p className="text-gray-600">
              Advancing the field of computational biology through innovative
              approaches to protein design and structure prediction, ultimately
              contributing to therapeutic developments.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Publications & Presentations</h3>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">Computational Approaches in Protein Design</h4>
              <p className="text-gray-600">Undergraduate Research Symposium, 2023</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold">Machine Learning in Structural Biology</h4>
              <p className="text-gray-600">Department Research Seminar, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;