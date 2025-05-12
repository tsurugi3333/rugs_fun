// src/types/user.ts

export type UserRole = 'user' | 'admin' | 'moderator' | 'vip';
export type UserBadge = 'user' | 'bronze' | 'silver' | 'gold' | 'verified';

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  level: number;
  experience: number;
  balance: number;
  tier: number;
  badge?: UserBadge;
  role?: UserRole;
  joinedAt: string;
}

export interface LeaderboardEntry {
  user: {
    username: string;
    level: number;
    role: UserRole;
    avatar?: string;
    badge?: UserBadge;
  };
  profit: number;
  position?: number;
}