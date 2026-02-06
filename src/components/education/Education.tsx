import React from 'react';
import { Section } from '../layout/Section';
import { EducationCard } from './EducationCard';
import { educationData } from '../../data/education';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic credentials and specialized training"
      variant="accent"
    >
      <div className="education-list">
        {educationData.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
