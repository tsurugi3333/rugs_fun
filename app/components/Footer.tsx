import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              FREE DIDDY
            </Link>
            <p className="text-sm mt-2">Copyright © 2025 | All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="/about" className="text-white hover:text-gray-300 text-sm">
                About
              </Link>
              <Link href="/tokenomics" className="text-white hover:text-gray-300 text-sm">
                Tokenomics
              </Link>
              <Link href="/staking" className="text-white hover:text-gray-300 text-sm">
                Staking
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}