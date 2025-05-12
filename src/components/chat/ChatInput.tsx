import { FC, FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex justify-between p-2">
      <div className="flex jsutify-between items-center bg-gray-800 rounded-md py-1 max-w-3/4 ">
        {/* Input field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          className="flex-1 bg-transparent px-2 max-w-7/8 text-white text-sm placeholder-gray-400 focus:outline-none"
        />

        {/* Emoji icon */}
        <button
          type="button"
          className="text-yellow-400 hover:scale-105 transition-all"
          title="Emoji"
        >
          <span className="drop-shadow-[0_0_4px_#facc15]">😎</span>
        </button>
      </div>

      {/* Send button */}
      <button
        type="submit"
        className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
      >
        Send
      </button>
    </form>
  );

};

export default ChatInput;