import React from 'react';
import TokenDistribution from './TokenDistribution';

interface TokenomicsProps {
  fullPage?: boolean;
}

export default function Tokenomics({ fullPage = false }: TokenomicsProps) {
  return (
    <section id="tokenomics" className={`py-8 sm:py-12 md:py-16 bg-white relative ${fullPage ? 'pt-16 sm:pt-20 md:pt-24' : ''}`}>
      <div className="container flex flex-col text-center items-center mx-auto px-4 sm:px-6 relative">
        {/* Header image - responsive */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto relative z-10">
          <img 
            src="/images/tokenmic-header.png" 
            alt="Tokenomics" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Left side image - responsive and properly positioned */}
        <div className="absolute z-10 left-0 -top-4 sm:-top-6 md:-top-10 w-1/3 sm:w-1/4 md:w-auto max-w-xs hidden sm:block">
          <img 
            src="/images/OG_17- web 1.png" 
            alt="" 
            className="w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[300px]"
          />
        </div>
        
        {/* Main content container with proper spacing */}
        <div className="w-full max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-24 lg:mt-30 bg-white p-4 sm:p-5 md:p-6 border border-black border-2" 
          style={{ boxShadow: '4px 4px 5px rgba(0, 0, 0, 4)' }}
        >
          {/* Token info and distribution cards */}
          <div className="flex flex-col md:flex-row mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-10 sm:mb-16 md:mb-20 gap-6 md:gap-8">
            {/* TOKEN INFO CARD */}
            <div className="mb-6 md:mb-0 w-full bg-orange-100 md:w-1/2 border border-black border-2 rounded-md relative">
              {/* Card header with responsive positioning */}
              <h3 className="text-lg sm:text-xl font-bold mb-4 bg-black inline-block mx-1 px-2 sm:px-3 py-1 -mt-3 sm:-mt-4 md:-mt-5 absolute left-2 sm:left-3">
                <img 
                  src="/images/TOKEN INFO.png" 
                  alt="Token Info" 
                  className='px-1 sm:px-2 py-0.5 sm:py-1 h-6 sm:h-8 md:h-auto'
                />
              </h3>
              
              {/* Card content */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 px-3 sm:px-4 md:px-5 text-black mt-8 sm:mt-9 md:mt-10 mb-3 sm:mb-4 md:mb-5 text-left">
                <div>
                  <p className="text-gray-900 text-base sm:text-lg font-bold">Ticker</p>
                  <p className="text-lg sm:text-xl">$Diddy</p>
                </div>
                <div>
                  <p className="text-gray-900 text-base sm:text-lg font-bold">Network</p>
                  <p className="text-lg sm:text-xl">Solana</p>
                </div>
                <div>
                  <p className="text-gray-900 text-base sm:text-lg font-bold">Total Supply</p>
                  <p className="text-lg sm:text-xl">1,000,000,000</p>
                </div>
              </div>
            </div>
            
            {/* DISTRIBUTION CARD */}
            <div className="w-full md:w-1/2 border bg-orange-100 border-black border-2 rounded-md relative">
              {/* Card header with responsive positioning */}
              <h3 className="text-lg sm:text-xl font-bold mb-4 bg-black inline-block px-2 sm:px-3 py-1 -mt-3 sm:-mt-4 md:-mt-5 absolute right-2 sm:right-3 z-10">
                <img 
                  src="/images/distribution.png" 
                  alt="Distribution" 
                  className='px-1 sm:px-2 py-0.5 sm:py-1 h-6 sm:h-8 md:h-auto'
                />
              </h3>
              
              {/* Distribution chart */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <TokenDistribution />
              </div>
            </div>
          </div>
          
          {/* TOKEN ADDRESS SECTION */}
          <div className="mt-6 sm:mt-8 border border-black border-2 rounded-md relative bg-orange-100">
            {/* Section header with responsive positioning */}
            <h3 className="text-lg sm:text-xl font-bold mb-2 bg-black inline-block px-2 sm:px-3 py-1 mx-1 sm:mx-2 -mt-3 sm:-mt-4 absolute left-0">
              <img 
                src="/images/TOKEN ADDRESS.png" 
                alt="Token Address" 
                className='px-1 sm:px-2 py-0.5 sm:py-1 h-6 sm:h-8 md:h-auto'
              />
            </h3>
            
            {/* Address input field */}
            <div className="flex flex-col sm:flex-row items-center bg-white border-2 border-black rounded-md mx-2 sm:mx-3 p-2 mt-8 sm:mt-9 md:mt-10 mb-3 sm:mb-4">
              <input 
                type="text" 
                value="" 
                readOnly 
                placeholder="Contract address will appear here"
                className="bg-transparent border-none outline-none w-full sm:flex-grow text-gray-300 mb-2 sm:mb-0 text-sm sm:text-base"
              />
              <button 
                className="bg-black text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm w-full sm:w-auto" 
                style={{boxShadow: '2px 2px 2px sm:3px 3px 2px rgba(200, 200, 10, 8)'}}
              >
                <img 
                  src="/images/COPY ADDRESS.png" 
                  alt="Copy Address" 
                  className='px-1 sm:px-2 py-0.5 sm:py-1 h-6 sm:h-8 md:h-auto'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom right image - responsive */}
      <div className="absolute bottom-0 right-0 w-1/3 sm:w-1/4 md:w-auto max-w-xs">
        <img 
          src="/images/OG_11_web 1.png" 
          alt="" 
          className="w-full h-auto max-w-[120px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        />
      </div>
    </section>
  );
}