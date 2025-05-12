import { FC, useEffect, useRef, useState } from 'react';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

interface CandleData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  initialPrice?: number;
  height?: number;
  updateInterval?: number;
  showControls?: boolean;
  currency?: string;
  maxCandles?: number;
  maxMultiplier?: number;
  minMultiplier?: number;
  volatility?: number;
  onMultiplierUpdate?: (multiplier: number) => void;
  triggerSellEffect?: boolean;
  onEffectComplete?: () => void;
  duration?: number; 
}

const CandlestickChart: FC<CandlestickChartProps> = ({
  initialPrice = 1.0,
  height = 400,
  updateInterval = 1000,
  currency = 'SOL',
  maxCandles = 15,
  maxMultiplier = 100.0,
  minMultiplier = 0.2,
  volatility = 0.15,
  onMultiplierUpdate,
  onEffectComplete,
  duration = 30000 
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<ChartType> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [referencePrice, setReferencePrice] = useState<number>(initialPrice * 0.75);
  const [currentPrice, setCurrentPrice] = useState<number>(initialPrice);
  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  
  const [isShaking, setIsShaking] = useState(false);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);
  const [explosionColor, setExplosionColor] = useState('rgba(251, 191, 36, 0.6)');
  const [milestoneText, setMilestoneText] = useState('');
  const [milestoneTextColor, setMilestoneTextColor] = useState('#FACC15');
  const [milestoneOpacity, setMilestoneOpacity] = useState(0);
  const [dangerLevel, setDangerLevel] = useState(0);
  const [safeLevel, setSafeLevel] = useState(0);

  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [showEndExplosion, setShowEndExplosion] = useState<boolean>(false);
  const [endAnimationPhase, setEndAnimationPhase] = useState<number>(0);
   
  const triggerEndExplosion = () => {
    setIsActive(false);
    
    // Phase 1: Initial shake and warning
    setIsShaking(true);
    setShakeIntensity(5);
    setMilestoneText("TIME'S UP!");
    setMilestoneTextColor('#ff0000');
    setMilestoneOpacity(1);
    setEndAnimationPhase(1);
    
    // Phase 2: Stronger shake and bomb icon
    setTimeout(() => {
      setShakeIntensity(8);
      setEndAnimationPhase(2);
    }, 1000);
    
    // Phase 3: Maximum shake
    setTimeout(() => {
      setShakeIntensity(10);
      setEndAnimationPhase(3);
    }, 2000);
    
    // Final explosion
    setTimeout(() => {
      setIsShaking(false);
      setMilestoneOpacity(0);
      setShowEndExplosion(true);
      setEndAnimationPhase(4);
    }, 3000);
    
    // Clean up
    setTimeout(() => {
      setShowEndExplosion(false);
      setEndAnimationPhase(0);
      if (onEffectComplete) {
        onEffectComplete();
      }
    }, 5000);
  };

  useEffect(() => {
    if (onMultiplierUpdate) {
      onMultiplierUpdate(currentPrice);
    }
  }, [currentPrice, onMultiplierUpdate]);

  const lastMilestoneRef = useRef<number>(0);
  const milestones = [2, 3, 5, 10, 15, 20, 25, 50, 75, 100];
  const generateCrashGamePrice = (prevPrice: number): number => {
  const pattern = Math.random();
    
    if (pattern < 0.01) {
      // Rare big spike (1% chance) - multiplier jumps significantly
      return Math.min(prevPrice * (1 + Math.random() * 5), maxMultiplier);
    } else if (pattern < 0.05) {
      // Uncommon medium spike (4% chance)
      return Math.min(prevPrice * (1 + Math.random() * 1.5), maxMultiplier);
    } else if (pattern < 0.15) {
      // Crash down (10% chance)
      return Math.max(prevPrice * (0.5 + Math.random() * 0.3), minMultiplier);
    } else {
      // Normal movement (85% chance)
      const change = prevPrice * volatility * (Math.random() - 0.45); // Slight upward bias
      return Math.min(Math.max(prevPrice + change, minMultiplier), maxMultiplier);
    }
  };

  const generateNewCandle = (): CandleData => {
    const time = Date.now();
    const open = currentPrice;
    const close = generateCrashGamePrice(open);
    
    const volatilityFactor = Math.min(open, close) * 0.1; // 10% of the smaller value
    const randomHigh = Math.random() * volatilityFactor;
    const randomLow = Math.random() * volatilityFactor;
    
    const high = Math.min(Math.max(open, close) + randomHigh, maxMultiplier);
    const low = Math.max(Math.min(open, close) - randomLow, minMultiplier);
    
    setCurrentPrice(close);
    
    return { time, open, high, low, close };
  };
  
  const checkForEffects = (price: number) => {
    if (price < 1.0) {
      const dangerPercent = Math.round(((1.0 - price) / (1.0 - minMultiplier)) * 100);
      setDangerLevel(Math.min(dangerPercent, 100));
      setSafeLevel(0); // Reset safe level
    } else {
      const safePercent = Math.min(Math.round((price - 1.0) * 10), 50);
      setSafeLevel(safePercent);
      setDangerLevel(0); // Reset danger level
    }
    
    for (const milestone of milestones) {
      if (price >= milestone && lastMilestoneRef.current < milestone) {
        lastMilestoneRef.current = milestone;
        let intensity, color, textColor, shakeDuration;
        
        if (milestone <= 2) {
          intensity = 2;
          color = 'rgba(74, 222, 128, 0.6)'; // Light green
          textColor = '#4ADE80';
          shakeDuration = 500;
        } else if (milestone <= 3) {
          // 3x - moderate effect
          intensity = 4;
          color = 'rgba(34, 211, 238, 0.6)'; // Cyan
          textColor = '#22D3EE';
          shakeDuration = 600;
        } else if (milestone <= 5) {
          // 5x - stronger effect
          intensity = 5;
          color = 'rgba(251, 191, 36, 0.6)'; // Yellow
          textColor = '#FACC15';
          shakeDuration = 700;
        } else if (milestone <= 10) {
          // 10x - intense effect
          intensity = 7;
          color = 'rgba(249, 115, 22, 0.6)'; // Orange
          textColor = '#F97316';
          shakeDuration = 800;
        } else if (milestone <= 20) {
          // 15-20x - very intense effect
          intensity = 8;
          color = 'rgba(239, 68, 68, 0.6)'; // Red
          textColor = '#EF4444';
          shakeDuration = 900;
        } else {
          // 25x+ - extreme effect
          intensity = 10;
          color = 'rgba(217, 70, 239, 0.6)'; // Purple
          textColor = '#D946EF';
          shakeDuration = 1000;
        }
        
        setShakeIntensity(intensity);
        setExplosionColor(color);
        setMilestoneTextColor(textColor);
        
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), shakeDuration);
        
        setMilestoneText(`${milestone}X !!`);
        setShowExplosion(true);
        setMilestoneOpacity(1);
        
        // Fade out text after a delay
        setTimeout(() => {
          setMilestoneOpacity(0);
          setTimeout(() => {
            setShowExplosion(false);
          }, 1000);
        }, 1500);
        
        break; // Only handle one milestone at a time
      }
    }
    
    if (price < lastMilestoneRef.current * 0.8) {
      lastMilestoneRef.current = Math.floor(price);
    }
  };

  // Timer effect
  useEffect(() => {
    if (!isActive) return;
    
    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1000) {
          clearInterval(intervalId);
          triggerEndExplosion();
          return 0;
        }
        return prevTime - updateInterval;
      });
    }, updateInterval);
    
    return () => clearInterval(intervalId);
  }, [isActive, updateInterval]);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      const newCandle = generateNewCandle();
      setCandleData(prev => {
        const updatedData = [...prev, newCandle];

        if (updatedData.length > maxCandles) {
          setStartIndex(updatedData.length - maxCandles);
        }
        return updatedData; 
      });
      
      checkForEffects(newCandle.close);
      
    }, updateInterval);

    return () => clearInterval(interval);
  }, [currentPrice, updateInterval, maxCandles, isActive]);

  useEffect(() => {
    const initialCandles: CandleData[] = [];
    let price = initialPrice;
    
    for (let i = 0; i < 8; i++) {
      const time = Date.now() - (8 - i) * updateInterval;
      const open = price;
      
      const close = generateCrashGamePrice(open);
      
      const volatilityFactor = Math.min(open, close) * 0.1;
      const high = Math.min(Math.max(open, close) + (Math.random() * volatilityFactor), maxMultiplier);
      const low = Math.max(Math.min(open, close) - (Math.random() * volatilityFactor), minMultiplier);
      
      initialCandles.push({ time, open, high, low, close });
      price = close; 
    }
    
    setCandleData(initialCandles);
    setCurrentPrice(initialCandles[initialCandles.length - 1].close);
    
    checkForEffects(price);
  }, [initialPrice, updateInterval]);

  useEffect(() => {
    if (!chartRef.current || candleData.length === 0) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const visibleData = candleData.slice(startIndex);
    
    const labels = visibleData.map(d => {
      const date = new Date(d.time);
      return date.getHours().toString().padStart(2, '0') + ':' + 
             date.getMinutes().toString().padStart(2, '0') + ':' + 
             date.getSeconds().toString().padStart(2, '0');
    });
    
    labels.unshift('');

    const yScaleType = 'logarithmic';
    
    const allHigh = Math.max(...visibleData.map(d => d.high));
    const allLow = Math.min(...visibleData.map(d => d.low));
    
    const yAxisMin = Math.max(allLow * 0.8, minMultiplier * 0.8);
    const yAxisMax = Math.min(allHigh * 1.2, maxMultiplier * 1.2);

    const plugin = {
      id: 'candlestick',
      beforeDraw: (chart: Chart) => {
        const ctx = chart.ctx;
        const xAxis = chart.scales['x'];
        const yAxis = chart.scales['y'];
        
        if (!xAxis || !yAxis) return;
        
        const candleWidth = Math.min(
          xAxis.width / visibleData.length * 0.5, // 50% of available space per candle
          20 // Maximum width in pixels
        );
        
        visibleData.forEach((candle, i) => {
          const x = xAxis.getPixelForValue(i + 1);
          
          // Candlestick body
          const openY = yAxis.getPixelForValue(candle.open);
          const closeY = yAxis.getPixelForValue(candle.close);
          const color = candle.open < candle.close ? '#10b981' : '#f87171'; // Brighter green and stronger red for better visibility
          
          ctx.fillStyle = color;
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          
          // Draw body
          ctx.fillRect(x - candleWidth / 2, Math.min(openY, closeY), candleWidth, Math.abs(closeY - openY) || 1);
          
          // Draw wicks
          const highY = yAxis.getPixelForValue(candle.high);
          const lowY = yAxis.getPixelForValue(candle.low);
          
          // Top wick
          ctx.beginPath();
          ctx.moveTo(x, highY);
          ctx.lineTo(x, Math.min(openY, closeY));
          ctx.stroke();
          
          // Bottom wick
          ctx.beginPath();
          ctx.moveTo(x, Math.max(openY, closeY));
          ctx.lineTo(x, lowY);
          ctx.stroke();
        });

        const currentY = yAxis.getPixelForValue(currentPrice);
        ctx.strokeStyle = '#fbbf24'; // yellow color
        ctx.beginPath();
        ctx.moveTo(chart.chartArea.left, currentY);
        ctx.lineTo(chart.chartArea.right, currentY);
        ctx.stroke();
        
        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'right';
        const labelX = chart.chartArea.right - 20; // 20px from right edge
        ctx.fillText(currentPrice.toFixed(2) + 'x', labelX, currentY - 5);
        
        ctx.setLineDash([]);
      }
    };

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      plugins: [plugin],
      data: {
        labels: labels,
        datasets: [
          {
            type: 'line' as const,
            label: 'Multiplier',
            data: [null, ...visibleData.map(() => null)], // Empty data as we'll draw custom candlesticks
            borderColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(0,0,0,0)',
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: updateInterval * 0.8 // Smooth animation that completes before next update
        },
        layout: {
          padding: {
            left: 40, // More padding on left for y-axis labels
            right: 40 // Keep some padding on right for our current price label
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#9ca3af',
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6 // Limit number of x-axis labels for readability
            }
          },
          y: {
            position: 'left' as const,
            type: yScaleType, // Use logarithmic scale for better visualization of multipliers
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#9ca3af',
              callback: function(tickValue: string | number) {
                if (typeof tickValue === 'number') {
                  return tickValue.toFixed(2) + 'x'; 
                }
                return tickValue; // Return as is if it's a string
              }
            },
            min: yAxisMin,
            max: yAxisMax,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [candleData, referencePrice, currentPrice, startIndex, updateInterval]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative bg-black border border-gray-800 rounded-lg overflow-hidden" 
      style={{ 
        height: `${height}px`,
        animation: isShaking ? `shake-${shakeIntensity} 0.5s cubic-bezier(.36,.07,.19,.97) both` : 'none'
      }}
    >
      {/* Current price indicator */}
      <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold z-10">
        {currentPrice.toFixed(2) + 'x'} {currency}
      </div>
      
      {/* Timer display */}
      <div className={`absolute top-2 right-2 px-2 py-1 rounded text-sm font-bold z-10 ${timeLeft < 5000 ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}>
        {formatTime(timeLeft)}
      </div>
      
      {/* Danger overlay (red gradient) */}
      {dangerLevel > 0 && (
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{ 
            background: `linear-gradient(transparent, rgba(220, 38, 38, ${dangerLevel/200})`,
            transition: 'opacity 0.5s ease'
          }}
        />
      )}
      
      {/* Safe overlay (green gradient) */}
      {safeLevel > 0 && (
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{ 
            background: `linear-gradient(transparent, rgba(16, 185, 129, ${safeLevel/200})`,
            transition: 'opacity 0.5s ease'
          }}
        />
      )}
      
      {/* Explosion effect and milestone text */}
      {showExplosion && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {/* Explosion effect */}
          <div className="relative">
            <div className="absolute -inset-12 animate-pulse" style={{ 
              background: `radial-gradient(circle, ${explosionColor} 0%, transparent 70%)`,
              animation: 'pulse 1s cubic-bezier(0,0,0.2,1) infinite',
              transform: 'scale(1)'
            }} />
            
            {/* Milestone text with fade effect */}
            <div 
              className="text-6xl font-extrabold"
              style={{ 
                color: milestoneTextColor,
                opacity: milestoneOpacity,
                transition: 'opacity 1s ease',
                textShadow: `0 0 10px ${explosionColor}, 0 0 20px ${explosionColor}`
              }}
            >
              {milestoneText}
            </div>
          </div>
        </div>
      )}
      
      {/* End explosion effect */}
        {endAnimationPhase > 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            {endAnimationPhase < 4 ? (
              <div className="relative">
                {/* Warning text */}
                <div 
                  className="text-6xl font-extrabold"
                  style={{ 
                    color: '#FF0000',
                    opacity: milestoneOpacity,
                    transition: 'opacity 1s ease',
                    textShadow: '0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.5)',
                    animation: endAnimationPhase >= 2 ? 'pulse-red 0.5s ease-in-out infinite' : 'none'
                  }}
                >
                  {endAnimationPhase === 1 && "TIME'S UP!"}
                  {endAnimationPhase === 2 && "💣"}
                  {endAnimationPhase === 3 && "💣💥"}
                </div>
              </div>
            ) : (
              showEndExplosion && (
                <>
                  {/* Final explosion effect */}
                  <div className="absolute inset-0" style={{
                    background: 'radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,165,0,0.6) 30%, rgba(255,255,0,0.4) 70%, transparent 100%)',
                    animation: 'explosion-pulse 0.5s ease-in-out infinite'
                  }} />
                  
                  {/* Multiple explosion particles */}
                  <div className="relative w-full h-full overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => {
                      // Generate random values outside of JSX
                      const size = Math.random() * 20 + 10;
                      const opacity = Math.random() * 0.7 + 0.3;
                      const rotation = Math.random() * 360;
                      const duration = Math.random() * 1.5 + 1;
                      const delay = Math.random() * 0.5;
                      const colorIndex = i % 3;
                      const backgroundColor = colorIndex === 0 ? '#FF0000' : colorIndex === 1 ? '#FF6600' : '#FFCC00';
                      
                      return (
                        <div 
                          key={i}
                          className="absolute"
                          style={{
                            top: '50%',
                            left: '50%',
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: '50%',
                            backgroundColor,
                            transform: 'translate(-50%, -50%)',
                            opacity,
                            animation: `fall-and-fade ${duration}s ease-out forwards`,
                            animationDelay: `${delay}s`,
                          }}
                          data-rotation={`${rotation}deg`}
                        />
                      );
                    })}
                  </div>
                </>
              )
            )}
          </div>
        )}

      <canvas ref={chartRef}></canvas>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes shake-2 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        @keyframes shake-4 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }
        @keyframes shake-5 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        @keyframes shake-7 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
          20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
        @keyframes shake-8 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        @keyframes shake-10 {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes fall-and-fade {
          0% { transform: translate(-50%, -50%) translateY(-50px) rotate(var(--rotation, 0deg)); opacity: 1; }
          100% { transform: translate(-50%, -50%) translateY(400px) rotate(var(--rotation, 0deg)); opacity: 0; }
        }
        
        @keyframes pulse-red {
          0%, 100% { transform: scale(1); text-shadow: 0 0 10px rgba(255,0,0,0.8); }
          50% { transform: scale(1.1); text-shadow: 0 0 20px rgba(255,0,0,1); }
        }

        @keyframes explosion-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes fall-and-fade {
          0% { 
            transform: translate(-50%, -50%) translateY(0) rotate(var(--rotation)); 
            opacity: 1; 
          }
          100% { 
            transform: translate(-50%, -50%) translateY(400px) rotate(calc(var(--rotation) + 360deg)); 
            opacity: 0; 
          }
        }

        @keyframes explosion-text {
          0% { 
            transform: scale(0.5); 
            opacity: 0; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 1; 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }
      `}</style>


    </div>
  );
};

export default CandlestickChart;