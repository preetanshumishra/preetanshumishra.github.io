import React from 'react';
import {
  Smartphone,
  TabletSmartphone,
  Code,
  Code2,
  Building2,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import type { SkillCategory } from '../../types/skills';
import './SkillCard.css';

interface SkillCardProps {
  category: SkillCategory;
}

const getIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    'smartphone': <Smartphone size={28} />,
    'tablet-smartphone': <TabletSmartphone size={28} />,
    'code': <Code size={28} />,
    'code-2': <Code2 size={28} />,
    'building-2': <Building2 size={28} />,
    'check-circle-2': <CheckCircle2 size={28} />,
    'wrench': <Wrench size={28} />,
  };
  return icons[iconName] || null;
};

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <div className="skill-card">
      {category.icon && (
        <div className="skill-icon">{getIcon(category.icon)}</div>
      )}
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
