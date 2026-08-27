export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface EducationItem {
  id: string;
  stage: string;
  level: string;
  institution: string;
  location: string;
  description: string;
  period: string;
  iconType: 'primary' | 'highschool' | 'college';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  name: string;
  greeting: string;
  titleRole: string;
  institution: string;
  institutionHighlight: string;
  profileImage: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3?: string;
  skills: string[];
  resumeUrl: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  location: string;
  projects: ProjectItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
}
