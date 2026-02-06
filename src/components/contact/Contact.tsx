import React from 'react';
import { Section } from '../layout/Section';
import { SocialLinks } from '../common/SocialLinks';
import { contactInfo } from '../../data/contact';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Open to new opportunities, collaborations, and conversations"
    >
      <div className="contact-content">
        <div className="contact-methods">
          <a href={`mailto:${contactInfo.email}`} className="contact-item">
            <span className="contact-icon">@</span>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">{contactInfo.email}</p>
            </div>
          </a>

          <a href={`tel:${contactInfo.phone}`} className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">Phone</p>
              <p className="contact-value">{contactInfo.phone}</p>
            </div>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">🔗</span>
            <div>
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">Connect on LinkedIn</p>
            </div>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">𝒢</span>
            <div>
              <p className="contact-label">GitHub</p>
              <p className="contact-value">View My Projects</p>
            </div>
          </a>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-social">
          <p className="social-label">Follow or contact me on:</p>
          <SocialLinks />
        </div>

        <div className="contact-cta">
          <p>
            Whether you have a project in mind, want to collaborate, or just want to chat about mobile development,
            feel free to reach out!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
