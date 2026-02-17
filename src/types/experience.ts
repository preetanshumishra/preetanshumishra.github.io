export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isRemote?: boolean;
  appLinks?: { name: string; url: string }[];
  articleLinks?: { title: string; url: string }[];
  metrics?: string[];
}
