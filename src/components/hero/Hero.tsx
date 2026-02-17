import React from 'react';
import { FileText } from 'lucide-react';
import { SocialLinks } from '../common/SocialLinks';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Preetanshu Mishra
          </h1>
          <p className="hero-subtitle">
            Senior Mobile Application Developer
          </p>
          <p className="hero-description">
            11+ years of experience in Mobile Application Development
            <br />
            (Android, iOS, .NET MAUI, Xamarin, React Native)
          </p>

          <div className="hero-cta">
            <button
              className="btn"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-with-icon"
            >
              <FileText size={20} />
              View Resume
            </a>
            <button
              className="btn secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>

          <div className="hero-social">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
