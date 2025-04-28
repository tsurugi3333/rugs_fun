'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import WalletPortfolio from '../components/WalletPortfolio';
import WalletTransactions from '../components/WalletTransactions';
import SocialFooter from '../components/SocialFooter';

interface TokenData {
  address: string;
  name: string;
  ticker: string;
  balance: string;
  price: string;
  value: string;
  percentage: string;
}

interface PriceData {
  address: string;
  price: number;
}

interface WalletAssetToken {
  mintAddress: string;
  name: string;
  symbol: string;
  balance: number;
}

interface WalletData {
  publicKey: string;
  assets: {
    sol: WalletAssetToken;
    tokens: WalletAssetToken[];
  };
}

export default function WalletTrackerPage() {
  const searchParams = useSearchParams();
  const addressFromQuery = searchParams.get('address');
  
  const [searchQuery, setSearchQuery] = useState(addressFromQuery || '');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'transactions' | 'analytics'>('portfolio');
  const [walletAddress, setWalletAddress] = useState('');
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (addressFromQuery) {
      setSearchQuery(addressFromQuery);
      fetchWalletData(addressFromQuery);
    }
  }, [addressFromQuery]);
  
  const fetchTokenPrices = async (tokenAddresses: string[]): Promise<PriceData[]> => {
    try {
      const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresses: tokenAddresses }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch token prices');
      }
      
      const data = await response.json();
      return data.tokenPrices as PriceData[];
    } catch (err) {
      console.error('Error fetching token prices:', err);
      return [];
    }
  };

  const calculatePortfolioValues = (tokensWithPrices: TokenData[]) => {
    const totalValue = tokensWithPrices.reduce((sum, token) => {
      const tokenValueStr = token.value.replace('$', '');
      const tokenValue = parseFloat(tokenValueStr) || 0;
      return sum + tokenValue;
    }, 0);
    
    if (totalValue > 0) {
      return tokensWithPrices.map(token => {
        const tokenValueStr = token.value.replace('$', '');
        const tokenValue = parseFloat(tokenValueStr) || 0;
        const percentage = ((tokenValue / totalValue) * 100).toFixed(2);
        return {
          ...token,
          percentage: `${percentage}%`
        };
      });
    }
    
    return tokensWithPrices;
  };
  
  const formatBalance = (balance: number) => {
    return balance.toFixed(2);
  };
  
  const fetchWalletData = async (walletAddress: string) => {
    setIsLoading(true);
    setError('');
    
    try {
      const walletResponse = await fetch('/api/wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
      });
      
      if (!walletResponse.ok) {
        const errorData = await walletResponse.json();
        throw new Error(errorData.error || 'Failed to fetch wallet data');
      }
      
      const walletData: WalletData = await walletResponse.json();
      
      let processedTokens: TokenData[] = [];
      const tokenAddresses: string[] = [];
      
      if (walletData.assets.sol) {
        processedTokens.push({
          address: walletData.assets.sol.mintAddress,
          name: walletData.assets.sol.name,
          ticker: walletData.assets.sol.symbol,
          balance: formatBalance(walletData.assets.sol.balance),
          price: "—", 
          value: "—", 
          percentage: "—"
        });
        
        tokenAddresses.push(walletData.assets.sol.mintAddress);
      }
      
      if (walletData.assets.tokens && walletData.assets.tokens.length > 0) {
        walletData.assets.tokens.forEach((token) => {
          processedTokens.push({
            address: token.mintAddress,
            name: token.name,
            ticker: token.symbol,
            balance: formatBalance(token.balance),
            price: "—", 
            value: "—", 
            percentage: "—" 
          });
          
          tokenAddresses.push(token.mintAddress);
        });
      }
      
      if (tokenAddresses.length > 0) {
        const priceData = await fetchTokenPrices(tokenAddresses);
        
        processedTokens = processedTokens.map(token => {
          const priceInfo = priceData.find((p) => p.address === token.address);
          const price = priceInfo?.price ?? 0;
          const balance = parseFloat(token.balance) || 0;
          const value = (price * balance).toFixed(2);
          
          return {
            ...token,
            price: `$${price}`,
            value: `$${value}`
          };
        });
        
        processedTokens = calculatePortfolioValues(processedTokens);
      }
      
      setWalletAddress(walletData.publicKey);
      setTokens(processedTokens);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Error fetching wallet data:', err.message);
      } else {
        console.error('Unknown error:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery) {
      setError('Please enter a wallet address');
      return;
    }
    
    await fetchWalletData(searchQuery);
  };
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return (
          <WalletPortfolio
            walletAddress={walletAddress || 'Enter Wallet Address'}
            tokens={tokens}
            activeTab={activeTab}
          />
        );
      case 'transactions':
        return (
          <WalletTransactions walletAddress={walletAddress} />
        );
      case 'analytics':
        return (
          <div className="p-6 text-center text-gray-400 min-h-100">
            Analytics feature coming soon
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-750 to-gray-800">
      <Navbar activePage="wallet-tracker" />
      
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </form>
            {error && (
              <div className="mt-2 text-red-500 text-sm">{error}</div>
            )}
          </div>
          
          {/* Portfolio container */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            {/* Tab navigation */}
            <div className="flex border-b border-gray-700">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'portfolio'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('portfolio')}
              >
                Portfolio
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'transactions'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'analytics'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
            </div>
            
            {/* Tab content */}
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6">
        <SocialFooter />
      </footer>
    </div>
  );
}