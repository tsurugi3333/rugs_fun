'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HowToBuyProps {
  fullPage?: boolean;
}

export default function HowToBuy({ fullPage = false }: HowToBuyProps) {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 3;

  const nextStep = () => {
    setActiveStep((prev) => (prev === totalSteps - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? totalSteps - 1 : prev - 1));
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  const steps = [
    {
      number: 1,
      title: "BUY SOL",
      description: "Buy SOL using your preferred exchange or DEX",
      image: "/images/OG_17- web 1.png"
    },
    {
      number: 2,
      title: "TRANSFER TO WALLET",
      description: "Send tokens to preferred wallet (Phantom, Metamask, Paw)",
      buttonText: "SWAP",
      image: "/images/OG_17- web 1.png"
    },
    {
      number: 3,
      title: "BUY $DIDDY",
      description: "Swap Native coin for $Diddy on Phantom",
      buttonText: "SWAP",
      image: "/images/OG_17- web 1.png"
    }
  ];

  return (
    <section id="how-to-buy" className={`py-16 bg-white text-black relative border-b-3 ${fullPage ? 'pt-24' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}>HOW TO BUY</h2>
        <p className="text-center mb-6 max-w-2xl mx-auto font-medium">
          Follow the simple steps below to buy $Diddy,<br/> and join Diddy movement!
        </p>
        
        {/* Person with sign - Positioned absolutely */}
        <div className="absolute left-0 bottom-0 z-10 hidden md:block">
          <img src="/images/ad.png" alt="Free Diddy" className="w-48 h-auto" />
        </div>
        
        <div className="max-w-md mx-auto relative">
          
          {/* Steps indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-4">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full ${activeStep === index ? 'bg-indigo-600' : 'bg-gray-300'} transition-colors`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Step Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div 
                    className="mb-4 border border-black rounded-md mx-auto relative"
                    style={{ 
                      boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)',
                    }}
                  >
                    <div className="absolute -top-3 left-4">
                      <h3 className="text-base text-white font-bold bg-black inline-block px-2 py-0.5">
                        STEP {step.number}
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row items-center p-4 pt-6">
                      <div className="md:mb-0 w-full md:w-2/3">
                        <h4 className="text-xl font-bold">{step.title}</h4>
                        <p className="text-sm mb-3">{step.description}</p>
                        {step.buttonText && (
                          <button className="bg-black text-white px-4 py-1 text-sm rounded font-bold hover:bg-gray-800 transition-colors">
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
                            alt={`Step ${step.number}: ${step.title}`} 
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
         

          {/* Mobile only ad image */}
          <div className="mt-10 flex justify-center md:hidden">
            <img src="/images/ad.png" alt="Free Diddy" className="max-w-full h-auto" />
          </div>
        </div>
        
         {/* Available On Section - Always visible */}
         <div 
            className="max-w-3xl items-center text-center mx-auto border border-black rounded-md relative"
            style={{ 
              boxShadow: '3px 3px 0 rgba(0,0,0,0.8)',
            }}
          >
            <div className="absolute -top-3 right-4">
              <div className="text-xs text-white bg-black px-2 py-0.5 font-bold inline-block">
                AVAILABLE ON
              </div>
            </div>
            <div className="flex justify-between items-center p-3 pt-5">
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