import { User } from './user';

export interface ChatMessage {
  id: string;
  user: User;
  text: string;
  timestamp: string;
  isVerified: boolean;
}