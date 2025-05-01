'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              <img src="/images/navbar-logo.png" alt="" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              <img src="/images/about.png" alt="" />
            </Link>
            <Link href="/story" className="text-white hover:text-gray-300 transition-colors">
              <img src="/images/story.png" alt="" />
            </Link>
            <Link href="/tokenomics" className="text-white hover:text-gray-300 transition-colors">
              <img src="/images/tokenomics.png" alt="" />
            </Link>
            <Link href="/how-to-buy" className="text-white hover:text-gray-300 transition-colors">
              <img src="/images/how-to-buy.png" alt="" />
            </Link>
          </div>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <img src="/images/x.png" alt="" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <img src="/images/navbar-telegram.png" alt="" />
              </a>
              <a href="https://dexscreener.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <img src="/images/navbar-dexscreener.png" alt="" />
              </a>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}