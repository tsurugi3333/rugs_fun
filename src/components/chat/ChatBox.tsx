import { FC, useEffect, useRef } from 'react';
import { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatBoxProps {
  messages?: ChatMessageType[];
}

const ChatBox: FC<ChatBoxProps> = ({ messages: initialMessages = [] }) => {
  const messages = initialMessages;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  return (
    <div className="flex flex-col font-dynapuff h-screen bg-[#0d0d0f] border-r border-b border-gray-800">
      {/* Header */}
      
      {/* Chat messages - flex-1 to take available space */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >

      </div>
      
      {/* input  chat */}
      {/* <div className="border-t border-gray-800 bg-[#0d0d0f] p-2">
        <ChatInput onSendMessage={handleSendMessage} />
      </div> */}
    </div>
  );
};

export default ChatBox;