export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  keyBenefits: string[];
}

export type ProjectCategory = 'MarTech' | 'CRM' | 'Automation' | 'E-commerce' | 'Real Estate';

export interface CaseStudyItem {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  problem: string;
  approach: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface InfluencerProject {
  id: string;
  title: string;
  brandName: string;
  platform: string;
  reachStat: string;
  date: string;
  description: string;
  category: string;
  url?: string;
}

export interface CareerItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  descriptionPoints: string[];
  keyAchievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
