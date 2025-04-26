'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import WalletPortfolio from '../components/WalletPortfolio';
import SocialFooter from '../components/SocialFooter';

export default function WalletTrackerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'transactions' | 'analytics'>('portfolio');
  
  // Mock wallet address
  const walletAddress = '3IYM5T5R.......YD9MU7J2MVQU';
  
  // Mock token data (empty array as shown in the design)
  const tokens: {
    address: string;
    name: string;
    ticker: string;
    balance: string;
    price: string;
    value: string;
    percentage: string;
  }[] = [];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for wallet:', searchQuery);
    // In a real app, you would fetch wallet data here
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-750 to-gray-800">
      <Navbar activePage="wallet" />
      
      <main className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {/* Search bar */}
          <div className="mb-8 relative">
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search Wallets"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          
          {/* Portfolio container with blue border */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <WalletPortfolio
              walletAddress={walletAddress}
              tokens={tokens}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>
      </main>
      
      <footer className="py-6">
        <SocialFooter />
      </footer>
    </div>
  );
}