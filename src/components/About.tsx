import React from 'react';
import { skills } from '../constants/skills';
import SkillCard from './ui/SkillCard';
import EducationCard from './ui/EducationCard';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Educational Journey</h3>
            <div className="space-y-4">
              <EducationCard
                institution="SASTRA Deemed University"
                degree="B.Tech in Biotechnology"
                period="2020 - Present"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Professional Philosophy</h3>
          <p className="text-gray-600 leading-relaxed">
            Dedicated to advancing the field of computational biology through innovative research
            and interdisciplinary collaboration. My work focuses on leveraging computational
            methods to understand protein design and function, with the goal of contributing
            to breakthrough discoveries in biotechnology and medicine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;