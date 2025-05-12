import { FC } from 'react';

interface UserAvatarProps {
  username: string;
  level?: number;
  size?: 'sm' | 'md' | 'lg';
}

const UserAvatar: FC<UserAvatarProps> = ({ username, level, size = 'md' }) => {
  const firstLetter = username.charAt(0).toUpperCase();
  const colorHash = Math.abs(username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 6;
  
  const bgColors = [
    'bg-red-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-purple-600',
    'bg-pink-600'
  ];
  
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base'
  };
  
  return (
    <div className="relative">
      <div className={`${bgColors[colorHash]} ${sizeClasses[size]} rounded-full flex items-center justify-center text-white font-medium`}>
        {firstLetter}
      </div>
      {level !== undefined && (
        <div className="absolute bottom-0 right-0 bg-gray-900 rounded-full text-xs px-1 text-white text-center transform translate-x-1/3 translate-y-1/3">
          {level}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;