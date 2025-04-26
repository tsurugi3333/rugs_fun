interface TransactionCardProps {
    wallet: string;
    walletSize: string;
    amount: string;
    dollarValue: string;
    token: string;
    isAlerted: boolean;
  }
  
  export default function TransactionCard({
    wallet,
    walletSize,
    amount,
    dollarValue,
    token,
    isAlerted
  }: TransactionCardProps) {
    return (
      <div className="flex items-center justify-between bg-gray-800 rounded border-b border-gray-800 py-3 px-2">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{wallet} with {walletSize} wallet size bought {amount} (${dollarValue}) of {token}</span>
        </div>
        
        <div className="flex space-x-4">
          <button className={`px-4 py-1 rounded text-xs ${isAlerted ? 'bg-opacity-25 bg-yellow-600 text-yellow-500' : 'bg-navy-700 hover:bg-navy-600'}`}>
            {isAlerted ? (
              <span className="pixel-font">ADDED TO ALERTS</span>
            ) : (
              <span className="pixel-font">ADD TO ALERTS</span>
            )}
          </button>
          
          <button className="bg-gray-700 hover:bg-navy-600 px-4 py-1 rounded text-xs">
            <span className="pixel-font">TRACK</span>
          </button>
        </div>
      </div>
    );
  }