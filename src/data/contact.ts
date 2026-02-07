import type { ContactInfo, SocialLink } from '../types/contact';

export const contactInfo: ContactInfo = {
  email: 'preetanshumishra@gmail.com',
  phone: '+1-(647)-217-3469',
  linkedin: 'https://www.linkedin.com/in/preetanshu',
  github: 'https://github.com/preetanshumishra',
  location: 'Toronto, ON',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/preetanshumishra',
    icon: 'github',
    label: 'GitHub Profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/preetanshu',
    icon: 'linkedin',
    label: 'LinkedIn Profile',
  },
  {
    platform: 'Email',
    url: 'mailto:preetanshumishra@gmail.com',
    icon: 'email',
    label: 'Email Contact',
  },
];