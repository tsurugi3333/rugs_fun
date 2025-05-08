'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; 
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogout = () => {
    Cookies.remove('auth');
    router.push('/login');
  };

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              <img src="/images/$Diddy.png" alt=""/>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <h2 className='font-extrabold italic text-2xl'>ABOUT</h2>
            </button>
            <button 
              onClick={() => scrollToSection('story')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <h2 className='font-extrabold italic text-2xl'>STORY</h2>
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <h2 className='font-extrabold italic text-2xl'>TOKENOMICS</h2>
            </button>
            <button 
              onClick={() => scrollToSection('how-to-buy')} 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <h2 className='font-extrabold italic text-2xl'>BUY NOW</h2>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://x.com/diddymemes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <img src="/images/x-social-media-white-icon.svg" width={20} alt="" />
            </a>

            <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <img src="/images/dex-screener-seeklogo.svg" width={20} alt="" />
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
        <div className="md:hidden bg-black/95 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block text-white px-3 py-2 w-full text-left hover:bg-gray-800"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('story')} 
              className="block text-white px-3 py-2 w-full text-left hover:bg-gray-800"
            >
              Story
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')} 
              className="block text-white px-3 py-2 w-full text-left hover:bg-gray-800"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection('how-to-buy')} 
              className="block text-white px-3 py-2 w-full text-left hover:bg-gray-800"
            >
              How to Buy
            </button>
          
          </div>
        </div>
      )}
    </nav>
  );
}