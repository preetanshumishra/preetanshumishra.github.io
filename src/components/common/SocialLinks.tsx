import React from 'react';
import { socialLinks } from '../../data/contact';
import './SocialLinks.css';

export const SocialLinks: React.FC = () => {
  const getIcon = (icon: string) => {
    const icons: Record<string, string> = {
      github: '𝒢',
      linkedin: 'in',
      email: '@',
    };
    return icons[icon] || icon;
  };

  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="social-link"
          title={link.label}
          aria-label={link.label}
          rel="noopener noreferrer"
          target={link.platform !== 'Email' ? '_blank' : undefined}
        >
          <span className="social-icon">{getIcon(link.icon)}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
