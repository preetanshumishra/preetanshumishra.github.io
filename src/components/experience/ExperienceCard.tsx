import React from 'react';
import type { Experience } from '../../types/experience';
import './ExperienceCard.css';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="company-name">{experience.company}</h3>
        <span className="duration">{experience.duration}</span>
      </div>
      <div className="experience-meta">
        <p className="position">{experience.position}</p>
        <p className="location">{experience.location}</p>
        <p className="date">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <p className="description">{experience.description}</p>
      {experience.achievements.length > 0 && (
        <ul className="achievements">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      )}
      <div className="technologies">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
