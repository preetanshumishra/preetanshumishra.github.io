import React from 'react';
import type { Project } from '../../types/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && <span className="featured-badge">Featured</span>}
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-meta">
        <div className="platforms">
          {project.platform.map((p) => (
            <span key={p} className="platform-badge">
              {p}
            </span>
          ))}
        </div>
        <span className="category-badge">{project.category}</span>
      </div>
      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      {project.highlights.length > 0 && (
        <ul className="highlights">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            → View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            → Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
