// app/dashboard/page.tsx (Dashboard Feed Page)
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import FilterSection from '../components/FilterSection';
import TransactionCard from '../components/TransactionCard';
import SocialFooter from '../components/SocialFooter';

export default function DashboardPage() {
  const [selectedWalletSize, setSelectedWalletSize] = useState('$50k+');
  const [selectedPositionSize, setSelectedPositionSize] = useState('20 SOL');
  const [customWalletSize, setCustomWalletSize] = useState('');
  const [customPositionSize, setCustomPositionSize] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const walletSizes = [
    { value: '$50k+', label: '$50k+' },
    { value: '$100k+', label: '$100k+' },
    { value: '$500k+', label: '$500k+' },
    { value: '$1M+', label: '$1M+' },
  ];
  
  const positionSizes = [
    { value: '5 SOL', label: '5 SOL' },
    { value: '10 SOL', label: '10 SOL' },
    { value: '20 SOL', label: '20 SOL' },
    { value: '50 SOL', label: '50 SOL' },
    { value: '100 SOL', label: '100 SOL' },
  ];
  
  // Mock transaction data
  const transactions = Array(10).fill(null).map((_, i) => ({
    id: i,
    wallet: '3IY9M...MVQU',
    walletSize: '$500k',
    amount: '15 SOL',
    dollarValue: '1,950',
    token: '$FARTCOIN',
    isAlerted: i % 3 === 0,
  }));

  const handleApplyFilters = () => {
    console.log('Applying filters:', {
      walletSize: selectedWalletSize,
      positionSize: selectedPositionSize,
      customWalletSize,
      customPositionSize
    });
    // In a real app, you would fetch filtered data here
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // In a real app, you would fetch data for the new page
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-750 to-gray-800">
      <Navbar activePage="dashboard" />
      
      <main className="flex-1 p-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-6">
            <div className="w-full max-w-4xl">
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search Transactions or Wallet"
                  className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 pl-4 pr-10 text-white"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FilterSection
                walletSizes={walletSizes}
                positionSizes={positionSizes}
                selectedWalletSize={selectedWalletSize}
                selectedPositionSize={selectedPositionSize}
                onWalletSizeChange={setSelectedWalletSize}
                onPositionSizeChange={setSelectedPositionSize}
                onCustomWalletSizeChange={setCustomWalletSize}
                onCustomPositionSizeChange={setCustomPositionSize}
                onApplyFilters={handleApplyFilters}
              />
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h2 className="pixel-font text-xl mb-6">DASHBOARD FEED</h2>
                
                <div className="space-y-2">
                  {transactions.map((transaction) => (
                    <TransactionCard
                      key={transaction.id}
                      wallet={transaction.wallet}
                      walletSize={transaction.walletSize}
                      amount={transaction.amount}
                      dollarValue={transaction.dollarValue}
                      token={transaction.token}
                      isAlerted={transaction.isAlerted}
                    />
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <div className="flex bg-gray-700 rounded-md">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 disabled:opacity-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div className="px-4 py-2">
                      Page {currentPage} of 6
                    </div>
                    
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === 6}
                      className="px-4 py-2 disabled:opacity-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <SocialFooter />
    </div>
  );
}