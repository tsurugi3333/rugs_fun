import { FC, useEffect, useRef, useState } from 'react';
import ChatMessage from '../chat/ChatMessage';
import ChatInput from './ChatInput';
import { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatBoxProps {
  messages?: ChatMessageType[];
}

const ChatBox: FC<ChatBoxProps> = ({ messages: initialMessages = [] }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = (text: string) => {
    const newMessage: ChatMessageType = {
      id: Date.now().toString(),
      user: {
        id: 'user-1',
        username: 'You',
        email: 'you@example.com',
        avatar: '👤',
        level: 2,
        experience: 0,
        balance: 0,
        tier: 1,
        badge: 'user',
        role: 'user',
        joinedAt: new Date().toISOString()
      },
      text: text,
      timestamp: new Date().toISOString(),
      isVerified: false
    };
    
    setMessages([...messages, newMessage]);
  };
  
  return (
    <div className="flex flex-col font-dynapuff h-screen bg-[#0d0d0f] border-r border-b border-gray-800">
      {/* Header */}
      <div className="flex justify-between p-3 border-b border-gray-800 bg-[#0d0d0f]">
        <h2 className="text-sm text-white font-medium flex items-center">
          <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
          GLOBAL (229)
        </h2>
        <div className="flex space-x-3">
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <img src="/images/icons8-discord.svg" width={20} alt="Discord" />
          </a>
          <a href="https://x.com/diddymemes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <img src="/images/x-social-media-white-icon.svg" width={15} alt="X" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <img src="/images/telegram-plane-svgrepo-com.svg" width={20} alt="Telegram" />
          </a>
        </div>
      </div>
      
      {/* Chat messages - flex-1 to take available space */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        <div className="p-2">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* input  chat */}
      <div className="border-t border-gray-800 bg-[#0d0d0f] p-2">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;