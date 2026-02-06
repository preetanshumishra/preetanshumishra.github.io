import React from 'react';
import { Section } from '../layout/Section';
import './About.css';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Professional mobile application developer with a passion for clean code and user-centric design"
    >
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Senior Mobile Application Developer with 11+ years of experience in designing, developing, and deploying
            mobile applications across multiple platforms. My journey spans from native development (Swift/Kotlin) to
            cross-platform solutions (React Native, .NET MAUI, Xamarin).
          </p>
          <p>
            I specialize in building scalable, maintainable applications using MVVM architecture and clean code principles.
            Having worked with global companies like LinkedIn and Stack Constructions, I've developed expertise in delivering
            high-quality solutions that solve real-world problems.
          </p>
          <p>
            Beyond coding, I'm passionate about mentoring junior developers, exploring new technologies, and contributing to
            open-source projects. My approach combines technical expertise with strong communication and problem-solving skills.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <div className="stat-value">11+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-value">6</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat">
            <div className="stat-value">25+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat">
            <div className="stat-value">4</div>
            <div className="stat-label">Platforms</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
