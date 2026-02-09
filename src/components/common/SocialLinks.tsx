import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/contact';
import './SocialLinks.css';

export const SocialLinks: React.FC = () => {
  const getIcon = (icon: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: <Github size={20} />,
      linkedin: <Linkedin size={20} />,
      email: <Mail size={20} />,
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
