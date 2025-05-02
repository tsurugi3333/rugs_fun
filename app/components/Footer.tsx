'use client';
import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for the fixed navbar
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          
          <div className='flex flex-col sm:flex-row md:flex-row lg-flex row'>
            <div className="flex flex-col space-x-4 mb-4 md:mb-0">
                <img src="/images/QUICK LINKS_.png" alt="" className='mb-4' width={100}/>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white hover:text-gray-300 text-sm mb-1 text-left cursor-pointer"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('tokenomics')} 
                  className="text-white hover:text-gray-300 text-sm mb-1 text-left cursor-pointer"
                >
                  Tokenomics
                </button>
                {/* Note: You might need to add a "community" section ID to your main page */}
                <button 
                  onClick={() => scrollToSection('community')} 
                  className="text-white hover:text-gray-300 text-sm mb-1 text-left cursor-pointer"
                >
                  Community
                </button>
            </div>
            <div>
              <div className="flex flex-col space-x-4">
                <img src="/images/SOCIALS_.png" alt="" className='mb-4' width={70}/>
                <div className='flex flex-row'>
                <div className="flex items-center space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                   <img src="/images/x.png" alt="" />
                  </a>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                   <img src="/images/navbar-telegram.png" alt="" />
                  </a>
                  <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
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