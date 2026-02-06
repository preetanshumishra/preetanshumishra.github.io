import React from 'react';
import type { Experience } from '../../types/experience';
import './ExperienceCard.css';

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isExpanded,
  onToggle,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={`experience-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={handleKeyDown}
    >
      {/* Header - Always visible */}
      <div className="experience-header">
        <div className="experience-title-group">
          <h3 className="company-name">{experience.company}</h3>
          <p className="position">{experience.position}</p>
        </div>
        <div className="experience-meta">
          <span className="duration-badge">{experience.duration}</span>
          <span className="expand-icon" aria-hidden="true">
            {isExpanded ? '▲' : '▼'}
          </span>
        </div>
      </div>

      {/* Expandable Details */}
      {isExpanded && (
        <div className="experience-details fade-in-up">
          <div className="experience-info">
            <span className="location">
              {experience.location}
            </span>
            <span className="dates">
              {experience.startDate} - {experience.endDate}
            </span>
          </div>

          <p className="description">{experience.description}</p>

          {experience.achievements.length > 0 && (
            <ul className="achievements stagger-children">
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
      )}
    </div>
  );
};

export default ExperienceCard;
