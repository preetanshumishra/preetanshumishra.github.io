import React, { useState } from 'react';
import { ThemeToggle } from '../common/ThemeToggle';
import classNames from '../../utils/classNames';
import './Header.css';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#hero" className="logo">
            <span className="logo-text">PM</span>
          </a>

          <nav className={classNames('nav', { 'nav-open': menuOpen })}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              className={classNames('menu-toggle', { active: menuOpen })}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="hamburger"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
