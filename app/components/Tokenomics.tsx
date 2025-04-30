import React from 'react';

interface TokenomicsProps {
  fullPage?: boolean;
}

export default function Tokenomics({ fullPage = false }: TokenomicsProps) {
  return (
    <section id="tokenomics" className={`py-16 bg-white ${fullPage ? 'pt-24' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-5xl bg-black py-4 px-4 mx-auto w-100 mb-12 text-center diddy-title">TOKENOMICS</h2>
        
        <div className="max-w-4xl mx-auto bg-white p-6 border border-black border-3">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:mb-0 md:mr-8 w-full md:w-1/2 border border-black border-2 rounded-md">
              <h3 className="text-xl font-bold mb-4 bg-black inline-block mx-1 px-3 py-1 -mt-20">TOKEN INFO</h3>
              <div className="space-y-4 px-3 text-black">
                <div>
                  <p className="text-gray-900 ">Ticker</p>
                  <p className="text-xl font-semibold">$Diddy</p>
                </div>
                <div>
                  <p className="text-gray-900">Network</p>
                  <p className="text-xl font-semibold">Solana</p>
                </div>
                <div>
                  <p className="text-gray-900">Total Supply</p>
                  <p className="text-xl font-semibold">1,000,000,000</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 border border-black border-2 rounded-md">
              <h3 className="text-xl font-bold mb-4 bg-black inline-block ml-38 px-3 py-1 -mt-9 md:-mt-20">DISTRIBUTION</h3>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full border-8 border-white flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute mt-16 text-center">
                    <p className="text-xs">community own (100%)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border border-black border-2 rounded-md">
            <h3 className="text-xl font-bold mb-2 bg-black inline-block px-3 py-1 mx-2 -mt-9 md:-mt-20">TOKEN ADDRESS</h3>
            <div className="flex items-center border-3 border-gray-700 rounded-md mx-3 p-2 mb-3">
              <input 
                type="text" 
                value="solana address placeholder" 
                readOnly 
                className="bg-transparent border-none outline-none flex-grow text-gray-300"
              />
              <button className="bg-black text-white px-3 py-1 rounded text-sm">
                COPY ADDRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}