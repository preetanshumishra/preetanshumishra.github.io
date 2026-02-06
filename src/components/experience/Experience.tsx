import React from 'react';
import { Section } from '../layout/Section';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from '../../data/experience';
import './Experience.css';

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="11+ years building mobile applications across diverse industries"
      variant="accent"
    >
      <div className="experience-list">
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
