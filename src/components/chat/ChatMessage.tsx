import { FC } from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  const { user, text, timestamp, isVerified } = message;
  
  const formattedTime = new Date(timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit'
  });
  
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <div className="flex items-center">
          {user.avatar && (
            <span className="mr-1">{user.avatar}</span>
          )}
          {user.level > 0 && (
            <span className="text-xs bg-gray-800 text-gray-300 rounded px-1 mr-1">
              Lv.{user.level}
            </span>
          )}
          <span className={`font-medium text-sm ${user.badge === 'verified' || isVerified ? 'text-purple-400' : 'text-yellow-400'}`}>
            {user.username}
          </span>
          {(user.badge === 'verified' || isVerified) && (
            <span className="text-purple-400 ml-1">✓</span>
          )}
        </div>
        <span className="text-xs text-gray-500 ml-auto">{formattedTime}</span>
      </div>
      <div className="mt-1 text-gray-300 text-xs">{text}</div>
    </div>
  );
};

export default ChatMessage;