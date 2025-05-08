'use client'
import { useState, useEffect } from "react";

export default function Hero() {
  const tokenAddress = "CCAGrGiB4924TFQ5MGNAW9oQK7eZ9LmrwjRFoV5Lis2u";
  const [showNotification, setShowNotification] = useState(false);
  const [displayAddress, setDisplayAddress] = useState(tokenAddress);
  const [isMobile, setIsMobile] = useState(false);
  
  // Function to truncate address for mobile displays
  const truncateAddress = (address: string) => {
    if (isMobile) {
      const start = address.slice(0, 8);
      const end = address.slice(-8);
      return `${start}...${end}`;
    }
    return address;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    setDisplayAddress(truncateAddress(tokenAddress));
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, tokenAddress]);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress)
      .then(() => {
        setShowNotification(true);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  return (
    <div className="relative min-h-240 hero-bg top-16 flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 z-20 text-center md:text-right">
        <div className="max-w-3xl ml-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 diddy-title text-white">
            <img src="/images/Heading 2 → ABOUT STICKSY.png" alt="" />
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white font-semibold">
            <img src="/images/TOKEN ADDRESS.png" alt="token address" />
          </p>
          <div className="w-5/6 bg-white rounded-lg px-4 py-2 border border-black border-3 relative"
                style={{boxShadow: '3px 3px 4px rgba(0, 0, 0, 4)'}}>
            <div className="flex items-center w-full">
              <input
                type="text"
                value={displayAddress}
                readOnly
                className="w-full bg-white rounded-sm border-1 border-white px-0 mr-2 text-gray-600"
              />
              <button
                onClick={copyToClipboard}
                className="bg-black text-white rounded-sm px-4 py-3 font-bold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <img src="/images/COPY ADDRESS.png" alt="" />
              </button>
            </div>
            
            {/* Notification popup */}
            {showNotification && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                CA copied successfully!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden bg-black z-30">
        <div className="marquee whitespace-nowrap text-white font-extrabold uppercase py-2 px-4 text-sm md:text-lg flex">
            <div className="marquee-content flex shrink-0 italic">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`a-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
            <div className="marquee-content flex shrink-0 italic">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`b-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}