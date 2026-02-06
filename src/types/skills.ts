export interface Skill {
  name: string;
  proficiency: number; // 1-5
  yearsOfExperience?: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon?: string;
  skills: Skill[];
}
