export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  university: string;
  degree: string;
  expectedGraduation: string;
  location: string;
  tagline: string;
  shortBio: string; // Under 180 words
  avatarUrl?: string;
  resumeUrl: string;
  resumeLastUpdated: string;
  specializedResumes?: {
    label: string;
    description: string;
    url: string;
    iconType: 'software' | 'aiml' | 'cybersecurity' | 'hardware' | 'general';
  }[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    leetcode?: string;
    codeforces?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: 'Proficient' | 'Familiar' | 'Learning';
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  isFlagship?: boolean;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDetails?: string[];
  metricsOrOutcome?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'Internship' | 'Freelance' | 'Volunteer' | 'Open-Source';
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  isPlaceholderNotice?: boolean;
}

export interface AdditionalEducation {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  graduationYear: string;
  gpa: string;
  relevantCoursework: string[];
  finalYearProject?: {
    title: string;
    summary: string;
    technologies: string[];
  };
  additionalEducation?: AdditionalEducation[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Scholarship' | 'Leadership';
  organization: string;
  year: string;
  description: string;
}

export type Theme = 'light' | 'dark';
