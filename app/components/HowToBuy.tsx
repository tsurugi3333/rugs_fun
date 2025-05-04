'use client';

import { Bangers } from 'next/font/google';
import Link from "next/link";

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


interface HowToBuyProps {
  fullPage?: boolean;
}

export default function HowToBuy({ fullPage = false }: HowToBuyProps) {
  return (
    <section id="how-to-buy" className={`py-16 bg-white text-black relative border-b-2 ${fullPage ? 'pt-24' : ''}`}>
      <div className="container flex flex-col mx-auto text-center items-center justify-center px-4"> 
        <img src="/images/Heading 2 → HOW TO BUY (1).png" alt=""/> 
        <p className="text-center mb-6 max-w-2xl mx-auto font-bold mt-5"> 
          Buy with credit card or crypto 
        </p>
        
        {/* Character images container with responsive positioning */}
        <div className="w-full">
          {/* Left character - responsive positioning */}
          <div className="hidden md:block absolute left-10 bottom-0 z-1 w-1/6 min-w-24 max-w-100">
            <img src="/images/ad.png" alt="Free Diddy" className="w-full h-auto" />
          </div>
          
          {/* Right character - responsive positioning */}
          <div className="hidden md:block absolute right-10 bottom-0 z-1 w-1/5 min-w-32 max-w-120">
            <img src="/images/noteplacing.png.png" alt="Diddy" className="w-full h-auto" />
          </div>
          
          <div className="w-full mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-around gap-6 px-4 sm:px-6 md:px-8 lg:px-12 mb-8 md:mb-20">

              <Link href="https://x.com" className="w-full md:w-1/2 border-2 border-black rounded-lg shadow-md mx-auto md:mx-0 mb-6 md:mb-0 max-w-lg px-3 py-6 md:ml-16 lg:ml-24 hover:bg-gray-200 transition-all"
                style={{ boxShadow: '3px 4px 3px rgba(0, 0, 0, 0.5)' }}>
                <h2 className={`${bangers.className} text-[48px] leading-[48px] tracking-[1.2px] text-gray-800 uppercase text-center py-10`}>
                  Buy with crypto
                </h2>
              </Link>

              <Link href="https://x.com" className="w-full md:w-1/2 border-2 border-black rounded-lg shadow-md mx-auto md:mx-0 max-w-lg px-3 py-6 md:mr-16 lg:mr-24 hover:bg-gray-200 transition-all"
                style={{ boxShadow: '3px 4px 3px rgba(0, 0, 0, 0.5)' }}>
                <h2 className={`${bangers.className} text-[48px] leading-[48px] tracking-[1.2px] text-gray-800 uppercase text-center py-10`}>
                  Buy with Debit Card
                </h2>
              </Link>

            </div>
          </div>
          
        </div>
        
        {/* Available On Section - Always visible */}
        <div className="w-full max-w-3xl items-center text-center mx-auto rounded-md relative">
          <div className="flex justify-center items-center text-lg font-bold text-center mx-auto">
            Buy easily with 
            <a href="https://moonshot.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/MOONSHOT 1.png"
                alt="Moonshot"
                width={160}
                height={30}
                className="object-contain mx-4 cursor-pointer"
              />
            </a>
          </div>
        </div>
        
        <div className="w-full max-w-4xl items-center text-center mt-3 sm:mt-5 mx-auto rounded-md relative">
          <div className="flex flex-wrap justify-center gap-4 p-6 pt-5">
            <img src="/images/1706195363venmo-logo-transparent.png" alt="Venmo" className="h-8 object-contain" />
            <img src="/images/apple-pay-card5428.png" alt="Apple Pay" className="h-8 object-contain" />
            <img src="/images/MasterCard_Logo.svg.png" alt="MasterCard" className="h-8 object-contain" />
            <img src="/images/Visa_Logo.png" alt="Visa" className="h-8 object-contain" />
            <img src="/images/usdc-logo-on-transparent-background-free-vector 1.png" alt="USDC" className="h-8 object-contain" />
            <img src="/images/solana_sol_logo_28f7fb0af5 1.png" alt="Solana" className="h-8 object-contain" />
          </div>
        </div>

        
        <div className="w-[65%] py-3 z-0">
          <p className="text-md sm:text-md text-center mx-auto max-w-6xl px-4 leading-relaxed text-gray-600">
            <span className="font-bold">$DIDDY</span> is designed as a form of expression and engagement with the ideals and beliefs represented by the symbol &quot;$DIDDY&quot; and its associated artwork. It is not intended to serve as, or be perceived as, an investment opportunity, investment contract, or any form of security.
          </p>
          <p className="text-md sm:text-md text-center mx-auto max-w-6xl px-4 leading-relaxed text-gray-600"><span className="font-bold">$DIDDY</span> memes are akin to collectibles and you understand in purchasing them that they are solely for entertainment, social interaction and cultural purposes.</p>
        </div>
      </div>
    </section>
  );
}