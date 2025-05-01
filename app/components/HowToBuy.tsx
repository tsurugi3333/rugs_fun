'use client';

import React, { useState } from 'react';

interface HowToBuyProps {
  fullPage?: boolean;
}

export default function HowToBuy({ fullPage = false }: HowToBuyProps) {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 3;

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  const steps = [
    {
      number: 1,
      titleImage: "/images/Heading 3 → Buy XRP.png", // Replace with your actual image path
      description: "Buy SOL using your preferred exchange or DEX",
      image: "/images/OG_17- web 1.png"
    },
    {
      number: 2,
      titleImage: "/images/Heading 3 → Buy XRP 2.png", /
      description: "Send tokens to preferred wallet (Phantom, Metamask, Paw)",
      buttonText: "SWAP",
      buttonShadow: "purple", // For step 2, purple shadow
      image: "/images/OG_17- web 1.png"
    },
    {
      number: 3,
      titleImage: "/images/Heading 3 → Buy XRP 1.png", /
      description: "Swap Native coin for $Diddy on Phantom",
      buttonText: "SWAP",
      buttonShadow: "black", // For step 3, black shadow
      image: "/images/OG_17- web 1.png"
    }
  ];

  return (
    <section id="how-to-buy" className={`py-16 bg-white text-black relative border-b-2 ${fullPage ? 'pt-24' : ''}`}>
      <div className="container flex flex-col mx-auto text-center items-center justify-center px-4">
        <img src="/images/Heading 2 → HOW TO BUY.png" alt=""/>
        <p className="text-center mb-6 max-w-2xl mx-auto font-bold mt-5">
          Follow the simple steps below to buy $Diddy,<br/> and join Diddy movement!
        </p>
        
        {/* Person with sign - Positioned absolutely */}
        <div className="absolute left-60 bottom-0 z-10 hidden md:block">
          <img src="/images/ad.png" alt="Free Diddy" className="w-48 h-auto" />
        </div>
        
        <div className="max-w-xl mx-auto relative">
          
          {/* Steps indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-4 h-4 border-1 rounded-full ${activeStep === index ? 'bg-indigo-400' : 'bg-gray-300'} transition-colors`}
                  aria-label={`Go to step ${index + 1}`}
                  style={{boxShadow: '2px 2px 2px rgba(0,0,0,3)'}}
                />
              ))}
            </div>
          </div>
          
          {/* Step Content - Only show active step */}
          <div className="w-full">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`w-full transition-opacity duration-300 ${activeStep === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div 
                  className="mb-4 border-2 rounded-md mx-auto relative"
                  style={{ 
                    boxShadow: '3px 3px 4px rgba(0, 0, 0, 8)',
                  }}
                >
                  <div className="absolute -top-3 left-4 ">
                    <h3 className="text-base text-white font-bold bg-black italic inline-block px-2 py-0.5">
                      STEP {step.number}
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row items-center p-4 pt-6">
                    <div className="md:mb-0 w-full md:w-2/3">
                      {/* Title image instead of text */}
                      <div className="flex justify-center md:justify-start mb-2">
                        <img 
                          src={step.titleImage} 
                          alt={`Step ${step.number}`} 
                          className="h-8 object-contain px-3"
                        />
                      </div>
                      <p className="text-sm mb-3">{step.description}</p>
                      {step.buttonText && (
                        <button 
                          className="bg-black text-white px-3 py-1 text-sm rounded font-bold hover:bg-gray-800 transition-colors"
                          style={{ 
                            boxShadow: step.buttonShadow === 'purple' 
                              ? '2px 2px 5px rgba(128, 0, 128, 0.8)' 
                              : step.buttonShadow === 'black'
                                ? '2px 2px 5px rgba(0, 0, 0, 0.8)'
                                : 'none'
                          }}
                        >
                          {step.buttonText}
                        </button>
                      )}
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                      <div className="rounded-full flex items-center justify-center">
                        <img 
                          src={step.image} 
                          width={200} 
                          height={90} 
                          alt={`Step ${step.number} illustration`} 
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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