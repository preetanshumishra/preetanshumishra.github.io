import React from 'react';
import type { Education } from '../../types/education';
import './EducationCard.css';

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="education-card">
      <div className="education-year">
        {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
      </div>
      <h3 className="degree">{education.degree}</h3>
      <p className="field">{education.field}</p>
      <p className="institution">{education.institution}</p>
      <p className="location">{education.location}</p>
    </div>
  );
};

export default EducationCard;
