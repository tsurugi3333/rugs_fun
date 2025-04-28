import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TransactionCardProps {
  wallet: string;
  walletSize: string;
  amount: string;
  dollarValue: string;
  token: string;
  isBuy: boolean;
  isAlerted: boolean;
  onAddAlert: (wallet: string) => void;
  onTrack: (wallet: string) => void;
}

export default function TransactionCard({
  wallet,
  walletSize,
  amount,
  dollarValue,
  token,
  isBuy,
  isAlerted,
  onAddAlert,
  onTrack
}: TransactionCardProps) {
  const walletForTrack = wallet;
  const [copySuccess, setCopySuccess] = useState(false);
  const router = useRouter();

  const displayedWallet = wallet.substring(0, 4) + "..." + wallet.substring(wallet.length - 4); 
  const displayedToken = token.substring(0, 4) + "..." + token.substring(token.length - 4);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(walletForTrack)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleTrackWallet = () => {
    onTrack(walletForTrack);
    
    router.push(`/wallet-tracker?address=${encodeURIComponent(walletForTrack)}`);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 rounded border-b border-gray-800 py-1 px-2">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 ${isBuy ? 'text-green-500' : 'text-red-500'}`} viewBox="0 0 20 20" fill="currentColor">
          {isBuy ? (
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          )}
        </svg>
        <span className="text-sm">
          <span className="group relative inline-flex items-center">
            {displayedWallet}
            <button 
              onClick={handleCopyToClipboard} 
              className="ml-1 text-gray-400 hover:text-blue-400 focus:outline-none"
              aria-label="Copy full wallet address"
              title="Copy full wallet address"
            >
              {copySuccess ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              )}
            </button>
            <span className={`absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${copySuccess ? 'opacity-100' : ''}`}>
              {copySuccess ? 'Copied full address!' : 'Copy full address'}
            </span>
          </span>
          {" "}with {walletSize} {isBuy ? 'bought' : 'sold'} {amount} (${dollarValue}) of {displayedToken}
        </span>
      </div>
      
      <div className="flex space-x-4">
        <button 
          className={`px-4 py-1 rounded text-xs ${isAlerted ? 'bg-opacity-25 bg-yellow-600 text-yellow-500' : 'bg-navy-700 hover:bg-navy-600'}`}
          onClick={() => onAddAlert(displayedWallet)}
        >
          {isAlerted ? (
            <span className="text-xs">ADDED TO ALERTS</span>
          ) : (
            <span className="text-xs">ADD TO ALERTS</span>
          )}
        </button>
        
        <button 
          className="bg-gray-700 hover:bg-navy-600 px-4 py-1 rounded text-xs cursor-pointer"
          onClick={handleTrackWallet}
        >
          <span className="text-xs">TRACK</span>
        </button>
      </div>
    </div>
  );
}