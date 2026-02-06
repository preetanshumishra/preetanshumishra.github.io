import React from 'react';
import type { SkillCategory } from '../../types/skills';
import './SkillCard.css';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="skill-card">
      {category.icon && <div className="skill-icon">{category.icon}</div>}
      <h3 className="skill-category">{category.name}</h3>
      <div className="skill-list">
        {category.skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="proficiency-bar">
              <div
                className="proficiency-fill"
                style={{ width: `${(skill.proficiency / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
