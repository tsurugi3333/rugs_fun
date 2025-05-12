import { FC } from 'react';
import { UserBadge } from '../../types/user';

interface LeaderboardItemProps {
  rank: number;
  user: {
    username: string;
    level: number;
    role: string;
    avatar?: string;
    badge?: UserBadge;
  };
  profit: number;
}

const LeaderboardItem: FC<LeaderboardItemProps> = ({ rank, user, profit }) => {
  const getBadgeIcon = (badge?: UserBadge) => {
    switch (badge) {
      case 'verified': return '✓';
      case 'gold': return '🥇';
      case 'silver': return '🥈';
      case 'bronze': return '🥉';
      default: return '';
    }
  };

  return (
    <div className="flex items-center py-2 border-b border-gray-800 text-sm">
      <div className="w-10 text-center text-gray-500">{rank}</div>
      <div className="flex-1 flex items-center">
        <span className="mr-2">{user.avatar || '👤'}</span>
        <div>
          <div className="text-white">
            {user.username}
            {user.badge && (
              <span className="ml-1 text-xs" title={user.badge}>
                {getBadgeIcon(user.badge)}
              </span>
            )}
          </div>
          <div className="text-xs text-gray-400">Level {user.level}</div>
        </div>
      </div>
      <div className="text-right font-medium text-green-400">+{profit.toFixed(3)}%</div>
    </div>
  );
};

export default LeaderboardItem;