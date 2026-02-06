import React, { useState } from 'react';
import { Section } from '../layout/Section';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projects';
import type { ProjectCategory } from '../../types/projects';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = ['All', 'Production', 'Sample'];

  // Filter to show only public projects
  const publicProjects = projectsData.filter((p) => p.visibility === 'public');

  const filtered = activeCategory === 'All'
    ? publicProjects
    : publicProjects.filter((p) => p.category === activeCategory);

  const featured = publicProjects.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of work spanning multiple technologies and platforms"
    >
      <div className="projects-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategory === 'All' && featured.length > 0 && (
        <div className="projects-section">
          <h3 className="projects-section-title">Featured Projects</h3>
          <div className="projects-grid featured-grid">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      <div className={`projects-grid ${activeCategory !== 'All' ? '' : 'regular-grid'}`}>
        {(activeCategory === 'All' ? regular : filtered).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
