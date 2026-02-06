import React from 'react';
import classNames from '../../utils/classNames';
import './Section.css';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  variant = 'default',
}) => {
  return (
    <section
      id={id}
      className={classNames('section', `section-${variant}`, className)}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};

export default Section;
