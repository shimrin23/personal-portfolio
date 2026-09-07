import { 
  PersonalDetails, 
  SkillCategory, 
  Project, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types/portfolio';

import personalDetailsJson from './personalDetails.json';
import skillsJson from './skills.json';
import experienceJson from './experience.json';
import educationJson from './education.json';
import certificationsJson from './certifications.json';
import achievementsJson from './achievements.json';

export const personalDetails: PersonalDetails = personalDetailsJson as PersonalDetails;
export const skillCategories: SkillCategory[] = (skillsJson as any).categories as SkillCategory[];

// Dynamically import all projects from individual JSON files (managed by Decap CMS)
const projectModules = import.meta.glob<Project | { default: Project }>('./projects/*.json', { eager: true });
export const projects: Project[] = Object.values(projectModules)
  .map((mod: any) => (mod.default ? mod.default : mod))
  .sort((a, b) => {
    if (a.isFlagship && !b.isFlagship) return -1;
    if (!a.isFlagship && b.isFlagship) return 1;
    return 0;
  });

export const experienceItems: ExperienceItem[] = (experienceJson as any).items as ExperienceItem[];
export const educationData: EducationItem = educationJson as EducationItem;
export const certificationItems: CertificationItem[] = (certificationsJson as any).items as CertificationItem[];
export const achievementItems: AchievementItem[] = (achievementsJson as any).items as AchievementItem[];
