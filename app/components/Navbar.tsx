'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ activePage }: { activePage: 'login'|'dashboard' | 'wallet-tracker' | 'alerts' }) {

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

      <div className="relative">
        
      </div>
    </nav>
  );
}
