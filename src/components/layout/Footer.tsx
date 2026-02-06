import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import './Footer.css';

export const Footer: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Preetanshu Mishra. All rights reserved.
          </p>
          <p className="footer-text">
            Built with <span className="heart">♥</span> using React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
