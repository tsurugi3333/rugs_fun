import { useState } from 'react';

export default function TokenAddress() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = 'solana_address_placeholder_here';
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
        <input 
          type="text" 
          value={tokenAddress} 
          readOnly 
          className="bg-transparent border-none outline-none flex-grow text-gray-300 px-3 py-2"
        />
        <button 
          onClick={copyToClipboard}
          className="bg-black text-white px-4 py-2 hover:bg-gray-900 transition-colors"
        >
          {copied ? 'COPIED!' : 'COPY ADDRESS'}
        </button>
      </div>
    </div>
  );
}