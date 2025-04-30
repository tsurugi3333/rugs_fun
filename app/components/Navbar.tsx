'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              FREE DIDDY
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              ABOUT
            </Link>
            <Link href="/story" className="text-white hover:text-gray-300 transition-colors">
              STORY
            </Link>
            <Link href="/tokenomics" className="text-white hover:text-gray-300 transition-colors">
              TOKENOMICS
            </Link>
            <Link href="/how-to-buy" className="text-white hover:text-gray-300 transition-colors">
              HOW TO BUY
            </Link>
          </div>
          <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaTelegram size={20} />
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
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/story"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              STORY
            </Link>
            <Link 
              href="/tokenomics"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TOKENOMICS
            </Link>
            <Link 
              href="/how-to-buy"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOW TO BUY
            </Link>
            
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}