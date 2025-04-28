'use client';

import { useState, useEffect } from 'react';

interface Transaction {
  signature: string;
  blockTime: number;
  confirmationStatus: string;
  slot: number;
}

interface WalletTransactionsProps {
  walletAddress: string;
}

export default function WalletTransactions({ walletAddress }: WalletTransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!walletAddress) return;
      
      setIsLoading(true);
      setError('');
      
      try {
        const response = await fetch('/api/walletTransactions', {
          method: 'POST',
          body: JSON.stringify({ 
            address: walletAddress,
            limit: 10
          }),
          headers: {
            'Content-Type': 'application/json'},
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        
        const data = await response.json();
        setTransactions(data.transactions || []);
      } catch (err) {
        if(err instanceof Error){
            setError(err.message || 'Error fetching transactions');
            console.error('Error fetching transactions:', err);
        }

      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [walletAddress]);


  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Unknown';
    return new Date(timestamp * 1000).toLocaleString();
  };

  const truncateSignature = (signature: string) => {
    if (!signature) return '';
    return `${signature.substring(0, 8)}...${signature.substring(signature.length - 8)}`;
  };

  return (
    <div className="w-full min-h-100 overflow-y-auto border border-gray-700 rounded-md">
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 py-4">{error}</div>
      ) : transactions.length === 0 ? (
        <div className="text-gray-400 py-4">No transactions found for this wallet.</div>
      ) : (
        <div className="max-h-96 pr-2 custom-scrollbar">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-900">
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left py-3 px-4">Signature</th>
                <th className="text-left py-3 px-4">Time</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Slot</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.signature} className="border-b border-gray-800 hover:bg-gray-850">
                  <td className="py-3 px-4">
                    <a 
                      href={`https://solscan.io/tx/${tx.signature}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {truncateSignature(tx.signature)}
                    </a>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{formatDate(tx.blockTime)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tx.confirmationStatus === 'confirmed' || tx.confirmationStatus === 'finalized' 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-yellow-900 text-yellow-300'
                    }`}>
                      {tx.confirmationStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{tx.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}