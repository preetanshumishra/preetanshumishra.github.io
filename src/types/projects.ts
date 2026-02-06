export type ProjectCategory = 'Production' | 'Sample' | 'Tutorial' | 'Demo';

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  platform: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
  visibility: 'public' | 'private';
  featured?: boolean;
}
