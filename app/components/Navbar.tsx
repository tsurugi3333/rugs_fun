'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Navbar({ activePage }: { activePage: 'login'|'dashboard' | 'wallet-tracker' | 'alerts' }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const walletAddress = '3IY9M...MVQU'; // Replace with actual wallet address
  const wallet = useWallet();
  const handleCopy = () => {
    navigator.clipboard.writeText('3IY9M6PVQUwG4x...'); // Full address here
  };

  const handleLogout = () => {
    if(wallet.connected){
      wallet.disconnect();
    }
    router.push('/');
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-navy-800 border-b border-gray-800 relative">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Image 
              src="/images/binoculars.svg" 
              alt="Whale Watcher Logo" 
              width={24} 
              height={24} 
            />
          </div>
          <h1 className="pixel-font text-xl font-bold">WHALE WATCHER</h1>
        </Link>
      </div>

      <div className="flex space-x-8">
        {['dashboard', 'wallet-tracker', 'alerts'].map((page) => (
          <Link
            key={page}
            href={`/${page}`}
            className={`pixel-font ${activePage === page ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
          >
            {page.replace('-', ' ').toUpperCase()}
          </Link>
        ))}
      </div>

      {/* Dropdown button */}
      <div className="relative">
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)} 
          className="bg-navy-700 text-white px-4 py-2 rounded-md pixel-font flex items-center"
        >
          <Image 
            src="/images/solana-logo.svg" 
            alt="Solana" 
            width={20} 
            height={20} 
          />
          <span className="truncate max-w-[150px] pl-2">{walletAddress}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
            <button 
              onClick={handleCopy} 
              className="block w-full text-left px-4 py-2 text-md text-bold text-white hover:bg-gray-700 cursor-pointer"
            >
              Copy Address
            </button>
            <button 
              onClick={handleLogout} 
              className="block w-full text-left px-4 py-2 text-md text-bold text-blue-500 hover:bg-gray-700 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
