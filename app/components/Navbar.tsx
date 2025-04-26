import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ activePage }: { activePage: 'login'|'dashboard' | 'wallet' | 'alerts' }) {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-navy-800 border-b border-gray-800">
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
        <Link 
          href="/dashboard" 
          className={`pixel-font ${activePage === 'dashboard' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
        >
          DASHBOARD FEED
        </Link>
        <Link 
          href="/wallet-tracker" 
          className={`pixel-font ${activePage === 'wallet' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
        >
          WALLET TRACKER
        </Link>
        <Link 
          href="/alerts" 
          className={`pixel-font ${activePage === 'alerts' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
        >
          ALERTS
        </Link>
      </div>
      
      <div className="flex items-center bg-gray-800">
        <button className="bg-navy-700 text-white px-4 py-2 rounded-md pixel-font flex items-center">
          <Image 
            src="/images/solana-logo.svg" 
            alt="Solana" 
            width={20} 
            height={20} 
          />
          <span className="truncate max-w-[150px] pl-2">3IY9M...MVQU</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
}