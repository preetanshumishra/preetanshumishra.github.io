import React, { useState } from 'react';
import { Section } from '../layout/Section';
import { ExperienceCard } from './ExperienceCard';
import { experienceData } from '../../data/experience';
import './Experience.css';

export const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="11+ years building mobile applications across diverse industries"
      variant="accent"
    >
      <div className="experience-list">
        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            isExpanded={expandedIds.has(exp.id)}
            onToggle={() => toggleExpanded(exp.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
