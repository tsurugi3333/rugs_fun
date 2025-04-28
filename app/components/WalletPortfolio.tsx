'use client';

import { useState } from 'react';

interface TokenData {
  address: string;
  name: string;
  ticker: string;
  balance: string;
  price: string;
  value: string;
  percentage: string;
}

interface WalletPortfolioProps {
  walletAddress: string;
  tokens: TokenData[];
  activeTab: 'portfolio' | 'transactions' | 'analytics';
}

export default function WalletPortfolio({
  walletAddress,
  tokens,
  activeTab,
}: WalletPortfolioProps) {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  
  const displayAddress = walletAddress.length > 20 
    ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 7)}`
    : walletAddress;
  
  const formatBalance = (balanceStr: string) => {
    if (balanceStr === "—") return balanceStr;
    
    const balance = parseFloat(balanceStr);
    return isNaN(balance) ? balanceStr : balance.toFixed(2);
  };
  
  const formatPrice = (priceStr: string) => {
    if (priceStr === "—") return priceStr;
    
    const cleanPrice = priceStr.replace('$', '');
    const price = parseFloat(cleanPrice);
    
    if (isNaN(price)) return priceStr;
    
    let formattedPrice = price.toFixed(8);
    
    while (formattedPrice.endsWith('0') && formattedPrice.includes('.')) {
      formattedPrice = formattedPrice.slice(0, -1);
    }
    
    if (formattedPrice.endsWith('.')) {
      formattedPrice = formattedPrice.slice(0, -1);
    }
    
    return '$' + formattedPrice;
  };
  
  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    
    setTimeout(() => {
      setCopiedAddress(null);
    }, 2000);
  };
  
  const getPercentageColor = (percentageStr: string) => {
    if (percentageStr === "—") return "text-gray-400";
    
    const percentage = parseFloat(percentageStr);
    if (percentage > 50) return "text-green-400";
    if (percentage > 20) return "text-green-300";
    if (percentage > 10) return "text-blue-300";
    if (percentage > 5) return "text-blue-200";
    return "text-gray-300";
  };
  
  return (
    <div className="min-h-100 bg-gray-900 rounded-lg overflow-hidden">
      {/* Wallet Address Header */}
      <div className="flex items-center justify-center py-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
          </svg>
          <span className="pixel-font text-white">{displayAddress}</span>
        </div>
        <button 
          onClick={() => copyToClipboard(walletAddress)}
          className={`ml-4 px-4 py-1 border ${copiedAddress === walletAddress ? 'border-green-600 bg-green-900/30' : 'border-gray-700 hover:bg-blue-900'} rounded pixel-font text-xs text-white transition-colors`}
        >
          {copiedAddress === walletAddress ? 'COPIED!' : 'COPY'}
        </button>
      </div>
      
      {/* Portfolio Tab Content */}
      {activeTab === 'portfolio' && (
        <div className="min-h-85 overflow-x-auto border border-gray-800 rounded-md">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full">
              <thead className="bg-gray-700 sticky top-0 z-10">
                <tr className="text-sm text-gray-400">
                  <th className="px-4 py-3 text-left">Token Address</th>
                  <th className="px-4 py-3 text-left">Token Name</th>
                  <th className="px-4 py-3 text-left">Ticker</th>
                  <th className="px-4 py-3 text-right">Token Balance</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Value</th>
                  <th className="px-4 py-3 text-right">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {tokens.length > 0 ? (
                  tokens.map((token, index) => (
                    <tr key={index} className="text-gray-300 text-sm hover:bg-gray-800">
                      <td className="px-4 py-3 whitespace-nowrap font-mono flex items-center">
                        <span>{token.address.substring(0, 6)}...{token.address.substring(token.address.length - 6)}</span>
                        <button 
                          onClick={() => copyToClipboard(token.address)}
                          className="ml-2 text-gray-400 hover:text-white"
                          title="Copy address"
                        >
                          {copiedAddress === token.address ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{token.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{token.ticker}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">{formatBalance(token.balance)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">{formatPrice(token.price)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">{token.value}</td>
                      <td className={`px-4 py-3 whitespace-nowrap text-right ${getPercentageColor(token.percentage)}`}>
                        {token.percentage}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center text-gray-500">
                      No tokens found in this wallet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Transactions Tab Content */}
      {activeTab === 'transactions' && (
        <div className="p-8 text-center text-gray-500">
          Transaction history will be displayed here
        </div>
      )}
      
      {/* Analytics Tab Content */}
      {activeTab === 'analytics' && (
        <div className="p-8 text-center text-gray-500">
          <div className="text-xl mb-4">Portfolio Distribution</div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              {tokens.length > 0 ? (
                <div className="h-8 w-full flex rounded-md overflow-hidden">
                  {tokens.map((token, index) => {
                    const percentage = parseFloat(token.percentage) || 0;
                    return (
                      <div 
                        key={index}
                        className={`h-full ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}
                        style={{ width: `${percentage}%` }}
                        title={`${token.name}: ${token.percentage}`}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-gray-500">No data to display</div>
              )}
              
              <div className="mt-6 grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                {tokens.map((token, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'} mr-2`}></div>
                    <div className="text-sm">{token.name} ({token.percentage})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}