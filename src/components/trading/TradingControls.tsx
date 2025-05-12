import { FC, useState, useEffect } from 'react';
import { Sparkles, Coins, AlertCircle } from 'lucide-react';

interface TradingControlsProps {
  onBuy: (amount: number) => void;
  onSell: (amount: number) => void;
}

const TradingControls: FC<TradingControlsProps> = ({ onBuy, onSell }) => {
  const [amount, setAmount] = useState<string>('0');
  const [sellPercentage, setSellPercentage] = useState<number>(100); // Default to 100%
  const [showEffect, setShowEffect] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);
  
  const handleBuy = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onBuy(value);
    }
  };
  
  const handleSell = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onSell(value);
    }
    
    // Toggle between success and failure on each click
    setIsSuccess(clickCount % 2 === 0);
    setClickCount(prevCount => prevCount + 1);
    setShowEffect(true);
    
    // Hide effect after animation completes
    setTimeout(() => {
      setShowEffect(false);
    }, 3000);
  };

  const handlePercentageChange = (percentage: number) => {
    setSellPercentage(percentage);
  };

  const clearAmount = () => {
    setAmount('0');
  };
  
  // Success Effect Component - Coins and Sparkles falling
  const SuccessEffect = () => {
    interface Particle {
      id: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
      isSparkle?: boolean;
    }
    
    const [particles, setParticles] = useState<Particle[]>([]);
    
    useEffect(() => {
      if (showEffect && isSuccess) {
        // Create particles for the animation
        const newParticles = Array(30).fill(0).map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 32 + 16, // Increased size
          delay: Math.random() * 0.5,
          duration: Math.random() * 1 + 1.5,
          isSparkle: Math.random() > 0.5
        }));
        
        setParticles(newParticles);
      } else {
        setParticles([]);
      }
    }, [showEffect, isSuccess]);
    
    if (!showEffect || !isSuccess) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-fall z-50"
            style={{
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: 0
            }}
          >
            {particle.isSparkle ? 
              <Sparkles size={particle.size} className="text-yellow-400" /> : 
              <Coins size={particle.size} className="text-yellow-500" />
            }
          </div>
        ))}
        {/* Only one message displayed with larger font */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-fadeOut text-center z-50">
          <div className="text-6xl font-bold text-yellow-400 animate-bounce-subtle">Congratulations!</div>
          <div className="text-3xl text-green-400 mt-4">Great Trade!</div>
        </div>
      </div>
    );
  };
  
  // Failure Effect Component - Falling down arrows and red warning
  const FailureEffect = () => {
    interface Particle {
      id: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
    }

    const [particles, setParticles] = useState<Particle[]>([]);
    
    useEffect(() => {
      if (showEffect && !isSuccess) {
        // Create particles for the animation
        const newParticles = Array(20).fill(0).map((_, i) => ({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 32 + 16, // Increased size
          delay: Math.random() * 0.5,
          duration: Math.random() * 1 + 1.5
        }));
        
        setParticles(newParticles);
      } else {
        setParticles([]);
      }
    }, [showEffect, isSuccess]);
    
    if (!showEffect || isSuccess) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-fall z-50"
            style={{
              left: `${particle.left}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: 0
            }}
          >
            <AlertCircle size={particle.size} className="text-red-500" />
          </div>
        ))}
        {/* Only one message displayed with larger font */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-fadeOut text-center z-50">
          <div className="text-6xl font-bold text-red-500 animate-shake">Failed!</div>
          <div className="text-3xl text-red-400 mt-4">You lost this trade!</div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-[#0d0d0f] text-white grid grid-cols-2 gap-4 p-4 relative">
      {/* Effects rendering */}
      <SuccessEffect />
      <FailureEffect />
      
      {/* Buy section */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="text-white text-lg font-bold">Buy</div>
          <div className="flex space-x-1">
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">+0.001</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">+0.01</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">+0.1</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">+1</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">1/2</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">X2</button>
            <button className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700">MAX</button>
          </div>
        </div>
        <div className="flex justify-between items-center border border-gray-800 rounded-md p-2">
          <input
            type="text"
            className="w-24 bg-transparent text-white text-left"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <button className="text-xs text-gray-400 px-2" onClick={clearAmount}>
              CLEAR
            </button>
            <div className="bg-gray-900 flex items-center px-2 rounded">
              <span className="font-bold text-yellow-500 mr-1">SOL</span>
              <span className="text-white">0.000</span>
              <button className="ml-1 text-white">▼</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sell section */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="text-white text-lg font-bold">Sell</div>
          <div className="flex justify-end items-center space-x-1">
            <button 
              onClick={() => handlePercentageChange(100)} 
              className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700"
            >
              AUTO
            </button>
            <button 
              onClick={() => handlePercentageChange(10)} 
              className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700"
            >
              10%
            </button>
            <button 
              onClick={() => handlePercentageChange(25)} 
              className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700"
            >
              25%
            </button>
            <button 
              onClick={() => handlePercentageChange(50)} 
              className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700"
            >
              50%
            </button>
            <button 
              onClick={() => handlePercentageChange(100)} 
              className="px-2 py-1 bg-gray-800 rounded text-xs hover:bg-gray-700"
            >
              ALL
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border border-gray-800 rounded-md p-2">
          <input
            type="text"
            className="w-20 bg-transparent text-white text-left"
            value={sellPercentage}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 0 && value <= 100) {
                setSellPercentage(value);
              }
            }}
          />
          <span className="text-white ml-1">%</span>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="col-span-2 flex justify-center gap-x-4 mt-2">
        <button
          className="flex-1 max-w-1/6 bg-green-600 border border-green-800 text-white py-3 rounded-md font-bold text-xl hover:bg-green-700 transition-transform active:scale-95"
          style={{boxShadow: '0px 4px 8px rgba(0, 255, 0, 0.3)'}}
          onClick={handleBuy}
        >
          BUY
        </button>
        <button
          className={`flex-1 max-w-1/6 bg-red-600 border border-red-800 text-white py-3 rounded-md font-bold text-xl hover:bg-red-700 transition-all active:scale-95 ${showEffect ? (isSuccess ? 'animate-pulse-green' : 'animate-pulse-red') : ''}`}
          style={{
            boxShadow: showEffect 
              ? (isSuccess ? '0px 0px 30px rgba(0, 255, 0, 0.9)' : '0px 0px 30px rgba(255, 0, 0, 0.9)') 
              : '0px 4px 8px rgba(255, 0, 0, 0.3)'
          }}
          onClick={handleSell}
        >
          SELL
        </button>
      </div>
      
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px);
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 0;
            transform: translateY(-20px) translateX(-50%);
          }
          15% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
          85% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
          100% {
            opacity: 0;
            transform: translateY(20px) translateX(-50%);
          }
        }
        
        .animate-fall {
          animation: fall 3s forwards;
        }
        
        .animate-fadeOut {
          animation: fadeOut 3s forwards;
        }
        
        .animate-pulse-green {
          animation: pulseGreen 0.5s infinite alternate;
        }
        
        .animate-pulse-red {
          animation: pulseRed 0.5s infinite alternate;
        }
        
        .animate-bounce-subtle {
          animation: bounceSlight 2s infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s infinite;
        }
        
        @keyframes bounceSlight {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        
        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
          }
          100% {
            box-shadow: 0 0 40px rgba(0, 255, 0, 1);
          }
        }
        
        @keyframes pulseRed {
          0% {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
          }
          100% {
            box-shadow: 0 0 40px rgba(255, 0, 0, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default TradingControls;