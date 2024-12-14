import React from 'react';
import { Dna, Brain, Database, Microscope } from 'lucide-react';
import { ResearchCard } from './ui/ResearchCard';

const ResearchDetails = () => {
  const specializations = [
    {
      icon: Dna,
      title: 'Protein Design & Engineering',
      description: 'Specializing in computational protein design using state-of-the-art ML models including AlphaFold and RoseTTAFold.',
      topics: ['Structure Prediction', 'Protein-Protein Interactions', 'Enzyme Design']
    },
    {
      icon: Brain,
      title: 'Machine Learning in Biology',
      description: 'Implementing deep learning approaches for biological sequence analysis and structure prediction.',
      topics: ['Deep Learning', 'Sequence Analysis', 'Structure Prediction']
    },
    {
      icon: Microscope,
      title: 'Drug Design',
      description: 'Computational approaches to drug discovery and molecular docking simulations.',
      topics: ['Virtual Screening', 'Molecular Docking', 'Lead Optimization']
    },
    {
      icon: Database,
      title: 'Bioinformatics',
      description: 'Data analysis and pipeline development for biological data processing.',
      topics: ['NGS Analysis', 'Structural Bioinformatics', 'Database Management']
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">Research Expertise</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <ResearchCard key={index} specialization={spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDetails;