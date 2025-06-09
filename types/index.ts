export interface Template {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  expertise: string[];
  experience: string;
  rating: number;
  reviewCount: number;
  pricePerSession: number;
  availableSlots: string[];
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  mau: number;
  createdAt: string;
  tags: string[];
  thumbnail?: string;
}

export interface KPIData {
  totalProjects: number;
  activeProjects: number;
  totalStudents: number;
  mentorSessions: number;
  monthlyGrowth: number;
  projectsByTech: { [key: string]: number };
  monthlyStats: {
    month: string;
    projects: number;
    students: number;
    sessions: number;
  }[];
}

export interface CloudCredit {
  id: string;
  provider: 'vercel' | 'supabase' | 'firebase' | 'render';
  amount: number;
  currency: string;
  expiryDate: string;
  status: 'available' | 'used' | 'expired';
  description: string;
}
