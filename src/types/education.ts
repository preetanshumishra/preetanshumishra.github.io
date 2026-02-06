export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  gpa?: string;
  achievements?: string[];
}
