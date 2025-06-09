import { Template, Mentor, Project, KPIData, CloudCredit } from '../types';

export const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Next.js Starter',
    description: 'モダンなWebアプリケーション開発のためのNext.js + TypeScript + Tailwind CSSテンプレート',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/student-publish/nextjs-starter',
    stars: 245,
    forks: 67,
    lastUpdated: '2024-01-15',
    difficulty: 'beginner'
  },
  {
    id: '2',
    name: 'SvelteKit App',
    description: 'SvelteKitを使った高速なWebアプリケーションテンプレート',
    techStack: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    githubUrl: 'https://github.com/student-publish/sveltekit-starter',
    stars: 189,
    forks: 43,
    lastUpdated: '2024-01-12',
    difficulty: 'intermediate'
  },
  {
    id: '3',
    name: 'FastAPI Backend',
    description: 'Python FastAPIを使ったREST API開発テンプレート',
    techStack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/student-publish/fastapi-starter',
    stars: 156,
    forks: 34,
    lastUpdated: '2024-01-10',
    difficulty: 'advanced'
  },
  {
    id: '4',
    name: 'React Native Mobile',
    description: 'クロスプラットフォームモバイルアプリ開発テンプレート',
    techStack: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    githubUrl: 'https://github.com/student-publish/rn-starter',
    stars: 98,
    forks: 28,
    lastUpdated: '2024-01-08',
    difficulty: 'intermediate'
  }
];

export const mockMentors: Mentor[] = [
  {
    id: '1',
    name: '田中 太郎',
    avatar: '/avatars/tanaka.jpg',
    expertise: ['React', 'Next.js', 'TypeScript', 'UI/UX'],
    experience: 'フロントエンドエンジニア 5年',
    rating: 4.9,
    reviewCount: 127,
    pricePerSession: 3000,
    availableSlots: ['2024-01-20 10:00', '2024-01-20 14:00', '2024-01-21 16:00'],
    bio: 'スタートアップでフロントエンド開発をリードしています。学生の皆さんのプロダクト開発をサポートします。'
  },
  {
    id: '2',
    name: '佐藤 花子',
    avatar: '/avatars/sato.jpg',
    expertise: ['Python', 'FastAPI', 'AWS', 'DevOps'],
    experience: 'バックエンドエンジニア 7年',
    rating: 4.8,
    reviewCount: 89,
    pricePerSession: 3500,
    availableSlots: ['2024-01-20 13:00', '2024-01-21 10:00', '2024-01-22 15:00'],
    bio: 'クラウドアーキテクチャとバックエンド開発が専門です。スケーラブルなシステム設計をお手伝いします。'
  },
  {
    id: '3',
    name: '山田 次郎',
    avatar: '/avatars/yamada.jpg',
    expertise: ['Product Management', 'Business Strategy', 'Marketing'],
    experience: 'プロダクトマネージャー 6年',
    rating: 4.7,
    reviewCount: 156,
    pricePerSession: 4000,
    availableSlots: ['2024-01-20 11:00', '2024-01-21 14:00', '2024-01-23 10:00'],
    bio: 'プロダクトの企画から市場投入まで幅広くサポート。ビジネス視点でのアドバイスを提供します。'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'StudyBuddy',
    description: '学習仲間を見つけるためのマッチングアプリ',
    author: '高専太郎',
    authorAvatar: '/avatars/student1.jpg',
    techStack: ['Next.js', 'Supabase', 'TypeScript'],
    githubUrl: 'https://github.com/student/studybuddy',
    liveUrl: 'https://studybuddy.vercel.app',
    stars: 45,
    mau: 1200,
    createdAt: '2023-12-15',
    tags: ['教育', 'マッチング', 'SNS'],
    thumbnail: '/projects/studybuddy.jpg'
  },
  {
    id: '2',
    title: 'EcoTracker',
    description: '日々の環境負荷を記録・可視化するアプリ',
    author: '大学花子',
    authorAvatar: '/avatars/student2.jpg',
    techStack: ['React', 'Firebase', 'Chart.js'],
    githubUrl: 'https://github.com/student/ecotracker',
    liveUrl: 'https://ecotracker.web.app',
    stars: 32,
    mau: 850,
    createdAt: '2023-11-20',
    tags: ['環境', 'ライフスタイル', 'データ可視化']
  },
  {
    id: '3',
    title: 'CodeReview AI',
    description: 'AIを活用したコードレビュー支援ツール',
    author: '専門学校次郎',
    authorAvatar: '/avatars/student3.jpg',
    techStack: ['Python', 'FastAPI', 'OpenAI API'],
    githubUrl: 'https://github.com/student/codereview-ai',
    stars: 78,
    mau: 2100,
    createdAt: '2023-10-10',
    tags: ['開発ツール', 'AI', 'コードレビュー']
  }
];

export const mockKPIData: KPIData = {
  totalProjects: 127,
  activeProjects: 89,
  totalStudents: 456,
  mentorSessions: 234,
  monthlyGrowth: 15.3,
  projectsByTech: {
    'Next.js': 45,
    'React': 38,
    'Python': 25,
    'SvelteKit': 12,
    'React Native': 7
  },
  monthlyStats: [
    { month: '2023-08', projects: 15, students: 67, sessions: 23 },
    { month: '2023-09', projects: 28, students: 134, sessions: 45 },
    { month: '2023-10', projects: 42, students: 198, sessions: 78 },
    { month: '2023-11', projects: 67, students: 289, sessions: 123 },
    { month: '2023-12', projects: 89, students: 367, sessions: 167 },
    { month: '2024-01', projects: 127, students: 456, sessions: 234 }
  ]
};

export const mockCloudCredits: CloudCredit[] = [
  {
    id: '1',
    provider: 'vercel',
    amount: 100,
    currency: 'USD',
    expiryDate: '2024-06-30',
    status: 'available',
    description: 'Vercel Pro プラン 3ヶ月分'
  },
  {
    id: '2',
    provider: 'supabase',
    amount: 50,
    currency: 'USD',
    expiryDate: '2024-05-31',
    status: 'available',
    description: 'Supabase Pro プラン 2ヶ月分'
  },
  {
    id: '3',
    provider: 'firebase',
    amount: 200,
    currency: 'USD',
    expiryDate: '2024-07-31',
    status: 'available',
    description: 'Firebase Blaze プラン クレジット'
  }
];
