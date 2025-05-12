import { FC } from 'react';
import { ChatMessage } from '../../types/chat';

interface SidebarProps {
  messages: ChatMessage[];
}

const Sidebar: FC<SidebarProps> = ({ messages }) => {
  return (
    <div className="w-64 bg-[#0d0d0f] border-r border-gray-800 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="px-4 py-2 border-b border-gray-800">
            <div className="flex items-center">
              {message.user.level && (
                <span className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 text-xs mr-2">
                  {message.user.level}
                </span>
              )}
              <span className={`font-medium ${message.isVerified ? 'text-purple-400' : 'text-gray-400'}`}>
                {message.user.username} {message.isVerified && '✓'}
              </span>
            </div>
            <p className="text-white text-sm mt-1">{message.text}</p>
          </div>
        ))}
      </div>
      
      <div className="p-2 border-t border-gray-800">
        <div className="flex items-center">
          <span className="text-gray-400 mr-2">Type your message</span>
          <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 text-xs">
            😊
          </button>
          <button className="ml-auto bg-green-600 text-white px-3 py-1 rounded text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;