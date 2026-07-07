export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  featured: boolean;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  impact?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface OpenSourceRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
}
