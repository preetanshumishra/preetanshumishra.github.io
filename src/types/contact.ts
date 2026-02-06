export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
