import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              <img src="/images/FREE DIDDY.png" alt=""/>
            </Link>
            <p className="text-sm mt-4 text-gray-700">Copyright © 2025 | All Rights Reserved</p>
          </div>
          
          <div className='flex'>
            <div className="flex flex-col space-x-4 mb-4 md:mb-0">
                <img src="/images/QUICK LINKS_.png" alt="" className='mb-4'/>
                <Link href="/about" className="text-white hover:text-gray-300 text-sm mb-1">
                  About
                </Link>
                <Link href="/tokenomics" className="text-white hover:text-gray-300 text-sm mb-1">
                  Tokenomics
                </Link>
                <Link href="/staking" className="text-white hover:text-gray-300 text-sm mb-1">
                  Staking
                </Link>
            </div>
            <div>
              <div className="flex flex-col space-x-4">
              <img src="/images/SOCIALS_.png" alt="" className='mb-4'/>
              <div className='flex flex-row'>
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
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}