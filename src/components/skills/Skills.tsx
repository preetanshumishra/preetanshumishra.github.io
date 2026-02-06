import React from 'react';
import { Section } from '../layout/Section';
import { SkillCard } from './SkillCard';
import { skillsData } from '../../data/skills';
import './Skills.css';

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Expertise across mobile platforms and architecture patterns"
    >
      <div className="skills-grid">
        {skillsData.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
