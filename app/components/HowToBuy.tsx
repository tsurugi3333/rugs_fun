'use client';

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
        
        {/* Person with sign - Positioned absolutely */}
        <div className="absolute left-60 bottom-0 z-10 hidden md:block">
          <img src="/images/ad.png" alt="Free Diddy" className="w-48 h-auto" />
        </div>
        
        <div className="w-full mx-auto relative">
          
        <div className="w-full flex flex-col md:flex-row justify-around gap-6 px-4 sm:px-6 md:px-8 lg:px-12 mb-8 md:mb-20">
          <div className="w-full md:w-1/2 border-2 border-black rounded-lg shadow-md mx-auto md:mx-0 mb-6 md:mb-0 max-w-lg px-3 py-6" style={{boxShadow: '3px 4px 3px rgba(0, 0, 0, 5)'}}>
            <img 
              src="/images/Heading 3 → Buy XRP (4).png" 
              className="w-full h-auto py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8" 
              alt="XRP Information" 
            />
          </div>
          <div className="w-full md:w-1/2 border-2 border-black rounded-lg shadow-md mx-auto md:mx-0 max-w-lg px-3 py-6" style={{boxShadow: '3px 4px 3px rgba(0, 0, 0, 5)'}}>
            <img 
              src="/images/Heading 3 → Buy XRP (6).png" 
              className="w-full h-auto py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8" 
              alt="XRP Information" 
            />
          </div>
        </div>

          {/* Mobile only ad image */}
          <div className="mt-10 flex justify-center md:hidden">
            <img src="/images/ad.png" alt="Free Diddy" className="max-w-full h-auto" />
          </div>
        </div>
        
        {/* Available On Section - Always visible */}
        <div 
          className="w-full max-w-3xl items-center text-center mt-3 sm:mt-5 mx-auto border-2 sm:border-3 border-black rounded-md relative"
          style={{ 
            boxShadow: '5px 5px 4px rgba(0,0,0,0.8)',
          }}
        >
          <div className="absolute -top-3 right-4">
            <div className="text-xs text-white bg-black px-3 py-0.5 font-bold inline-block">
              <img src="/images/AVAILABLE ON.png" width={140} alt="Available On"/>
            </div>
          </div>
          <div className="flex justify-between items-center p-6 pt-5">
            <span className="text-xl md:text-2xl font-bold">Phantom</span>
            <img src="/images/MOONSHOT 1.png" alt="Moonshot" width={160} height={30} className="object-contain" />
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <img src="/images/dexscreener.png" alt="DEX Screener" width={30} height={30} />
                <div>
                  <div><span className="font-bold">DEX</span>SCREENER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}