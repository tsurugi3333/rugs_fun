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
  onTabChange: (tab: 'portfolio' | 'transactions' | 'analytics') => void;
}

export default function WalletPortfolio({
  walletAddress,
  tokens,
  activeTab,
  onTabChange
}: WalletPortfolioProps) {
  return (
    <div className="min-h-130 bg-gray-900 rounded-lg overflow-hidden">
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
          <span className="pixel-font text-white">{walletAddress}</span>
        </div>
        <button className="ml-4 px-4 py-1 border border-gray-700 rounded pixel-font text-xs text-white hover:bg-blue-900 transition-colors">
          COPY
        </button>
      </div>
      
      {/* Tabs Section */}
      <div className="flex justify-center border-b border-gray-700">
        <button
          onClick={() => onTabChange('portfolio')}
          className={`px-6 py-3 pixel-font text-sm ${
            activeTab === 'portfolio' 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          PORTFOLIO
        </button>
        <button
          onClick={() => onTabChange('transactions')}
          className={`px-6 py-3 pixel-font text-sm ${
            activeTab === 'transactions' 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          TRANSACTIONS
        </button>
        <button
          onClick={() => onTabChange('analytics')}
          className={`px-6 py-3 pixel-font text-sm ${
            activeTab === 'analytics' 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          ANALYTICS
        </button>
      </div>
      
      {/* Portfolio Table */}
      {activeTab === 'portfolio' && (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr className="pixel-font text-xs text-gray-400">
                <th className="px-4 py-3 text-left">Token Address</th>
                <th className="px-4 py-3 text-left">Token Name</th>
                <th className="px-4 py-3 text-left">Ticker</th>
                <th className="px-4 py-3 text-left">Token Balance</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Value</th>
                <th className="px-4 py-3 text-left">Percentage of Portfolio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {tokens.length > 0 ? (
                tokens.map((token, index) => (
                  <tr key={index} className="text-gray-300 text-sm">
                    <td className="px-4 py-3 whitespace-nowrap">{token.address}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.ticker}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.balance}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.price}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.value}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{token.percentage}</td>
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
          Analytics data will be displayed here
        </div>
      )}
    </div>
  );
}