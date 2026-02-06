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
}
