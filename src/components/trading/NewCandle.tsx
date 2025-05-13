import { useState, useEffect, useRef } from 'react';

const AnimatedMultiCandleChart = () => {
  const chartWidth = 1200;
  const chartHeight = 400;
  const padding = 50;
  const leftPadding = 20;
  const initialCandleWidth = 36;
  const candleSpacing = 4;
  const yAxisValues = [0.1, 0.5, 1.0, 2.0, 5.0, 10.0, 20.0, 50.0, 80.0];
  const milestones = [3, 6, 9, 12, 15, 18, 21, 25, 30, 40, 50, 60, 70, 80];
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [chartContainerStyle, setChartContainerStyle] = useState({});
  const milestoneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastMilestoneRef = useRef(0);

  console.log(shakeIntensity);

  // Replace existing explosion variables with these canvas-based ones
  const [isExploding, setIsExploding] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const explosionFrameRef = useRef(0);
  const totalExplosionFrames = 60; // Your 60 PNG frames
  const explosionDuration = 2000; // 2 seconds
  const explosionAnimationRef = useRef<number | null>(null);
  const explosionImagesRef = useRef<HTMLImageElement[]>([]);
  const explosionImagesLoadedRef = useRef(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-bg {
        0% { background: radial-gradient(circle, rgba(220,38,38,0.6) 0%, rgba(0,0,0,0.7) 70%); }
        100% { background: radial-gradient(circle, rgba(220,38,38,0.9) 0%, rgba(0,0,0,0.8) 70%); }
      }
      
      @keyframes milestone-pulse {
        0% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); opacity: 0.9; }
      }
      
      @keyframes fade-out {
        0% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
      }
      
      .milestone-text {
        animation: milestone-pulse 0.5s ease-in-out infinite, fade-out 2.5s forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  interface Candle {
    id: number;
    initialOpen: number;
    currentOpen: number;
    currentHigh: number;
    currentLow: number;
    currentClose: number;
    isRising: boolean;
    trend: number;
    timestamp: number;
    elapsedSeconds: number;
    animated: boolean; // Flag to indicate if candle has started animating
  }

  const [candles, setCandles] = useState<Candle[]>([]);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [minValue, setMinValue] = useState(0.1);
  const [maxValue, setMaxValue] = useState(5.0);
  const [isPriceAboveDefault, setIsPriceAboveDefault] = useState(true);
  const [chartStarted, setChartStarted] = useState(false);
  console.log(isPriceAboveDefault);
  const [isRugged, setIsRugged] = useState(false);
  const [chartKey, setChartKey] = useState(0); // To force chart reset
  const frameId = useRef<number | null>(null);
  const candleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTimestamp = useRef(Date.now());
  const chartStartTime = useRef(Date.now());
  const lastAnimationTime = useRef(0);
  const volatility = 0.01; // Significantly increased for much larger value changes
  const minAllowedValue = 0.1;
  const maxAllowedValue = 80.0; // Increased from 10.0 to 80.0
  const rugTimeoutMs = 30000; // 20 seconds before rug pull
  const animationFPS = 60; // Target 60 fps for smoother animation
  const smoothingFactor = 0.5; // Lower value means faster response to changes
  const getMilestoneColor = (milestone: number) => {
    const colors = [
      '#10B981', // 3X - Emerald Green
      '#3B82F6', // 6X - Blue
      '#8B5CF6', // 9X - Purple
      '#EC4899', // 12X - Pink
      '#F59E0B', // 15X - Amber
      '#EF4444', // 18X - Red
      '#6366F1', // 21X - Indigo
      '#F97316', // 25X - Orange
      '#14B8A6', // 30X - Teal
      '#A855F7', // 40X - Fuchsia
      '#F43F5E', // 50X - Rose
      '#0EA5E9', // 60X - Sky Blue
      '#84CC16', // 70X - Lime
      '#D946EF'  // 80X - Magenta
    ];
    
    const index = milestones.indexOf(milestone);
    if (index >= 0 && index < colors.length) {
      return colors[index];
    }
    
    return '#10B981'; // Default color
  };

  const preloadExplosionImages = () => {
    if (explosionImagesLoadedRef.current) return Promise.resolve();
    
    const promises: Promise<void>[] = [];
    explosionImagesRef.current = [];
    
    for (let i = 0; i < totalExplosionFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(2, '0');
      img.src = `/images/explosion/explosion_${frameNumber}.png`;
      explosionImagesRef.current.push(img);
      
      const promise = new Promise<void>((resolve) => {
        img.onload = () => resolve();
      });
      promises.push(promise);
    }
    
    return Promise.all(promises).then(() => {
      explosionImagesLoadedRef.current = true;
    });
  };

   useEffect(() => {
    preloadExplosionImages();
    
    return () => {
      // Cleanup
      if (explosionAnimationRef.current) {
        cancelAnimationFrame(explosionAnimationRef.current);
      }
    };
  }, []);

   const startExplosionAnimation = () => {
    setIsExploding(true);
    explosionFrameRef.current = 0;
    
    const frameDuration = explosionDuration / totalExplosionFrames;
    const startTime = Date.now();
    
    const renderExplosionFrame = () => {
      const elapsed = Date.now() - startTime;
      const currentFrame = Math.min(
        Math.floor(elapsed / frameDuration), 
        totalExplosionFrames - 1
      );
      
      // Update the frame if it changed
      if (currentFrame !== explosionFrameRef.current) {
        explosionFrameRef.current = currentFrame;
        drawExplosionFrame(currentFrame);
      }
      
      if (currentFrame < totalExplosionFrames - 1) {
        explosionAnimationRef.current = requestAnimationFrame(renderExplosionFrame);
      } else {
        // Animation complete
        if (explosionAnimationRef.current) {
          cancelAnimationFrame(explosionAnimationRef.current);
          explosionAnimationRef.current = null;
        }
        setIsExploding(false);
      }
    };
    
    // Start the animation loop
    explosionAnimationRef.current = requestAnimationFrame(renderExplosionFrame);
  };

  const drawExplosionFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !explosionImagesLoadedRef.current) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Get the explosion frame image
    const explosionImg = explosionImagesRef.current[frameIndex];
    if (!explosionImg || !explosionImg.complete) return;
    
    // Calculate the position of the last candle
    const candleWidth = getCandleWidth();
    const actualWidth = candleWidth - candleSpacing;
    
    // Get the last candle position
    let targetCanvasX = canvas.width / 2; // Default center
    let targetCanvasY = canvas.height - padding - 10; // Default bottom position
    
    if (candles.length > 0) {
        const visibleWidth = chartWidth - (leftPadding + padding);
        const maxVisibleCandles = Math.floor(visibleWidth / (actualWidth + candleSpacing));
        const startIdx = Math.max(0, candles.length - maxVisibleCandles);
        const visibleCandles = candles.slice(startIdx);
        
        if (visibleCandles.length > 0) {
        // Get the last visible candle index
        const lastVisibleIndex = visibleCandles.length - 1;
        // Calculate the x position based on the last candle
        targetCanvasX = leftPadding + 50 + lastVisibleIndex * (actualWidth + candleSpacing) + actualWidth / 2;
        
        // Use the bottom of the chart for y position (position where price = 0.1)
        targetCanvasY = scaleY(0.1);
        }
    }
    
    // Size of explosion
    const explosionWidth = 500; // Width of explosion
    const explosionHeight = 500; // Height of explosion
    
    console.log("---------> canvas x value", targetCanvasX);
    // Draw the explosion centered at the position
    ctx.drawImage(
        explosionImg,
        targetCanvasX - explosionWidth / 2,
        targetCanvasY - explosionHeight / 2,
        explosionWidth,
        explosionHeight
    );
    };

  const generateShakeStyle = (intensity: number) => {
    if (intensity === 0) return {};
    
    const xOffset = Math.random() * intensity - intensity/2;
    const yOffset = Math.random() * intensity - intensity/2;
    const rotation = (Math.random() * intensity/5 - intensity/10).toFixed(2);
    
    return {
      transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`,
      transition: 'transform 0.05s ease-out'
    };
  };
  const checkAndTriggerMilestone = (price: number) => {
    for (let i = 0; i < milestones.length; i++) {
      const milestone = milestones[i];
      const nextMilestone = i < milestones.length - 1 ? milestones[i + 1] : Infinity;
      
      if (price >= milestone && price < nextMilestone && milestone > lastMilestoneRef.current) {
        showMilestoneEffect(milestone);
        lastMilestoneRef.current = milestone;
        break;
      }
    }
  };

  const showMilestoneEffect = (milestone: number) => {
    if (milestoneTimerRef.current) {
      clearTimeout(milestoneTimerRef.current);
    }
    
    setActiveMilestone(milestone);
    const baseIntensity = 5;
    const calculatedIntensity = baseIntensity * (milestone / 3);
    const cappedIntensity = Math.min(40, calculatedIntensity); // Cap at 40px for usability
    setShakeIntensity(cappedIntensity);
    
    const shakeDuration = 2000; // 2 seconds of shaking
    const shakeStart = Date.now();
    
    const animateShake = () => {
      const elapsed = Date.now() - shakeStart;
      
      if (elapsed < shakeDuration) {
        // Calculate decreasing intensity over time
        const remainingFactor = 1 - (elapsed / shakeDuration);
        const currentIntensity = cappedIntensity * remainingFactor;
        
        setChartContainerStyle(generateShakeStyle(currentIntensity));
        requestAnimationFrame(animateShake);
      } else {
        setChartContainerStyle({});
      }
    };
    
    requestAnimationFrame(animateShake);

    milestoneTimerRef.current = setTimeout(() => {
      setActiveMilestone(null);
      setShakeIntensity(0);
      setChartContainerStyle({});
    }, 3000);
  };

  const resetChart = () => {
    // Clear all intervals and animation frames
    if (candleIntervalRef.current) {
      clearInterval(candleIntervalRef.current);
      candleIntervalRef.current = null;
    }
    
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
      frameId.current = null;
    }
    
    if (milestoneTimerRef.current) {
      clearTimeout(milestoneTimerRef.current);
      milestoneTimerRef.current = null;
    }
    
    // Reset state
    setCandles([]);
    setScaleFactor(1);
    setMinValue(0.1);
    setMaxValue(5.0);
    setIsRugged(false);
    setChartStarted(false);
    setActiveMilestone(null);
    setShakeIntensity(0);
    setChartContainerStyle({});
    chartStartTime.current = Date.now();
    lastAnimationTime.current = 0;
    lastMilestoneRef.current = 0;
    setChartKey(prev => prev + 1); // Force re-render
    startChart();
  };
  
  const startChart = () => {
    const initialCandle = createNewCandle(1.0);
    setCandles([initialCandle]);
    setChartStarted(true);
    
    candleIntervalRef.current = setInterval(() => {
      setCandles(prevCandles => {
        if (prevCandles.length === 0) return [createNewCandle(1.0)];
        
        const lastCandle = prevCandles[prevCandles.length - 1];
        const newCandle = createNewCandle(lastCandle.currentClose);
        const newCandles = [...prevCandles, newCandle];
        
        if (newCandles.length > 15) {
          setScaleFactor(prev => Math.min(prev * 1.2, newCandles.length / 15));
        }
        return newCandles;
      });
    }, 2000);
    
    frameId.current = requestAnimationFrame(animateCandles);
    
    setTimeout(() => {
      triggerRugPull();
    }, rugTimeoutMs);
  };
  
  const triggerRugPull = () => {
    setIsRugged(true);
    
    // Start canvas explosion animation
    startExplosionAnimation();

    setCandles(prevCandles => {
      if (prevCandles.length === 0) return prevCandles;
      
      return prevCandles.map((candle, index) => {
        if (index === prevCandles.length - 1) {
          return {
            ...candle,
            currentClose: 0.1, // Drop to minimum value (0.1)
            currentLow: 0.1,
            trend: -1
          };
        }
        return candle;
      });
    });

    // Clean up
    if (candleIntervalRef.current) {
      clearInterval(candleIntervalRef.current);
      candleIntervalRef.current = null;
    }
    
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
      frameId.current = null;
    }

    if (milestoneTimerRef.current) {
      clearTimeout(milestoneTimerRef.current);
      milestoneTimerRef.current = null;
    }
    
    setActiveMilestone(null);
    setShakeIntensity(0);
    setChartContainerStyle({});
    
    // Reset chart after explosion completes
    setTimeout(() => {
      resetChart();
    }, 3000);
  };

  
  const createNewCandle = (openValue: number) => {
    const now = Date.now();
    const elapsedMs = now - chartStartTime.current;
    const elapsedSeconds = Math.floor(elapsedMs / 1000) * 2; // Increment by 2 seconds
    
    return {
      id: now,
      initialOpen: openValue,
      currentOpen: openValue,
      currentHigh: openValue,
      currentLow: openValue,
      currentClose: openValue,
      isRising: Math.random() > 0.5,
      trend: 0,
      timestamp: now,
      elapsedSeconds: elapsedSeconds,
      animated: false // Start as not animated
    };
  };
  
  const animateCandles = (timestamp: number) => {
    const deltaTime = timestamp - lastAnimationTime.current;
    
    if (deltaTime > (1000 / animationFPS) || lastAnimationTime.current === 0) {
      lastAnimationTime.current = timestamp;
      
      const now = Date.now();
      const frameElapsed = Math.min(0.08, (timestamp - lastTimestamp.current) / 1000); // Allow slightly larger time steps
      lastTimestamp.current = timestamp;
      const elapsedTime = now - chartStartTime.current;
      if (elapsedTime >= rugTimeoutMs && !isRugged) {
        triggerRugPull();
        return;
      }
      
      setCandles(prevCandles => {
        if (prevCandles.length === 0) return prevCandles;
        
        const updatedCandles = prevCandles.map((candle, index) => {
          // Only animate the last candle
          if (index === prevCandles.length - 1) {
            const elapsedMs = now - chartStartTime.current;
            const elapsedSeconds = Math.floor(elapsedMs / 1000) * 2; // Round to nearest 2s
            const animated = true;
            let isRising = candle.isRising;

            if (Math.random() < 0.05) { // Increased chance of direction change
              isRising = !isRising;
            }
            
            const direction = isRising ? 1 : -1;
            const bias = direction * 0.03; // Stronger trend bias
            const priceShock = Math.random() < 0.03 ? (Math.random() * 0.1 - 0.05) * direction : 0;
            const oscillation = Math.sin(timestamp * 0.001) * 0.015;
            const baseChange = (Math.random() * volatility * 3 - volatility + bias + oscillation + priceShock) * frameElapsed * 18;
            const smoothedChange = baseChange * (1 - smoothingFactor);
            let newClose = candle.currentClose * (1 + smoothedChange);

            newClose = Math.max(minAllowedValue, Math.min(maxAllowedValue, newClose));
            
            if (!candle.animated && index === 0) {
              newClose = 1.0;
            }
            
            const wickExtension = Math.random() * 0.08; // Increased wick length for more drama
            
            const newHigh = !candle.animated ? newClose : 
              Math.max(
                candle.currentHigh * smoothingFactor + newClose * (1 - smoothingFactor),
                newClose + wickExtension // Add larger random variation to highs
              );
            
            const newLow = !candle.animated ? newClose :
              Math.min(
                candle.currentLow * smoothingFactor + newClose * (1 - smoothingFactor),
                newClose - wickExtension // Add larger random variation to lows
              );
            
            setIsPriceAboveDefault(newClose > 1.0);
            
            checkAndTriggerMilestone(newClose);

            return {
              ...candle,
              currentHigh: newHigh,
              currentLow: newLow,
              currentClose: newClose,
              isRising,
              trend: newClose > candle.currentOpen ? 1 : newClose < candle.currentOpen ? -1 : 0,
              elapsedSeconds,
              animated
            };
          }
          return candle;
        });
        
        if (updatedCandles.length > 0) {
          const allValues = updatedCandles.flatMap(c => [c.currentHigh, c.currentLow, c.currentOpen, c.currentClose]);
          const lowestValue = Math.min(...allValues);
          const highestValue = Math.max(...allValues);
          
          let newMinValue = yAxisValues[0];
          let newMaxValue = yAxisValues[yAxisValues.length - 1];
          
          for (let i = yAxisValues.length - 1; i >= 0; i--) {
            if (yAxisValues[i] <= lowestValue * 0.9) {
              newMinValue = yAxisValues[i];
              break;
            }
          }
          
          for (let i = 0; i < yAxisValues.length; i++) {
            if (yAxisValues[i] >= highestValue * 1.1) {
              newMaxValue = yAxisValues[i];
              break;
            }
          }
          
          setMinValue(prevMin => prevMin * 0.95 + newMinValue * 0.05); // Smoother scale transition
          setMaxValue(prevMax => prevMax * 0.95 + newMaxValue * 0.05); // Smoother scale transition
        }
        
        return updatedCandles;
      });
    }
    
    frameId.current = requestAnimationFrame(animateCandles);
  };
  
  useEffect(() => {
    chartStartTime.current = Date.now();
    lastAnimationTime.current = 0;
    
    setTimeout(() => {
      startChart();
    }, 100);
    
    return () => {
      if (candleIntervalRef.current) {
        clearInterval(candleIntervalRef.current);
      }
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (milestoneTimerRef.current) {
        clearTimeout(milestoneTimerRef.current);
      }
       setIsExploding(false);
    };
  }, []);
  
  const scaleY = (value: number) => {
    return chartHeight - padding - ((Math.log(value) - Math.log(minValue)) / (Math.log(maxValue) - Math.log(minValue))) * (chartHeight - 2 * padding);
  };
  
  const getCandleWidth = () => {
    return initialCandleWidth / scaleFactor;
  };
  
  const formatPrice = (price: number) => {
    return price < 1 ? price.toFixed(2) : price < 10 ? price.toFixed(2) : price.toFixed(3);
  };
  
  const renderCandles = () => {
    const candleWidth = getCandleWidth();
    const actualWidth = candleWidth - candleSpacing;
    const visibleWidth = chartWidth - (leftPadding + padding);
    const maxVisibleCandles = Math.floor(visibleWidth / (actualWidth + candleSpacing));
    
    const startIdx = Math.max(0, candles.length - maxVisibleCandles);
    const visibleCandles = candles.slice(startIdx);
    
    return visibleCandles.map((candle, index) => {
      const relativeIndex = index;
      const candleX = leftPadding + 50 + relativeIndex * (actualWidth + candleSpacing);
      
      const candleBodyTop = scaleY(Math.max(candle.currentOpen, candle.currentClose));
      const candleBodyBottom = scaleY(Math.min(candle.currentOpen, candle.currentClose));
      const candleBodyHeight = Math.abs(candleBodyBottom - candleBodyTop);
      
      const candleColor = candle.trend > 0 
        ? "#4ade80" // Green for rising
        : candle.trend < 0 
          ? "#ef4444" // Red for falling
          : "#6b7280"; // Gray for neutral
      
      const wickWidth = 2;
      
      return (
        <g key={candle.id}>
          <line 
            x1={candleX + actualWidth / 2} 
            y1={scaleY(candle.currentHigh)} 
            x2={candleX + actualWidth / 2} 
            y2={scaleY(candle.currentLow)} 
            stroke={candleColor} 
            strokeWidth={wickWidth} 
          />
          
          <rect 
            x={candleX} 
            y={candleBodyTop} 
            width={actualWidth} 
            height={Math.max(1, candleBodyHeight)}
            fill={candleColor} 
            stroke={candleColor === "#6b7280" ? "#555" : "none"}
            strokeWidth={0.5}
          />
          
          {(index % 5 === 0 || index === visibleCandles.length - 1) && (
            <text 
              x={candleX + actualWidth / 2} 
              y={chartHeight - padding + 15} 
              textAnchor="middle" 
              fontSize="10"
              fill="#6b7280"
            >
              {candle.elapsedSeconds}s
            </text>
          )}
        </g>
      );
    });
  };
  
  const latestCandle = candles.length > 0 ? candles[candles.length - 1] : null;
  
  const timeUntilRug = Math.max(0, rugTimeoutMs - (Date.now() - chartStartTime.current));
  const secondsUntilRug = Math.ceil(timeUntilRug / 1000);
  
  return (
    <div className="relative flex flex-col items-center w-full bg-black rounded-lg" key={chartKey}>
      {!chartStarted && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="text-2xl font-bold text-white">
            Starting chart from 1.0...
          </div>
        </div>
      )}
      
      <div 
        className="w-full relative border-b mb-4 border-gray-800"
        style={chartContainerStyle}
      >
        <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="bg-black rounded">
          {/* Baseline highlight at 1.0 */}
          <line 
            x1={leftPadding} 
            y1={scaleY(1.0)} 
            x2={chartWidth - padding} 
            y2={scaleY(1.0)} 
            stroke="#444" 
            strokeWidth={1.5}
            strokeDasharray="5,5"
          />
          
          {yAxisValues.map((value, i) => (
            <line 
              key={i}
              x1={leftPadding} 
              y1={scaleY(value)} 
              x2={chartWidth - padding} 
              y2={scaleY(value)} 
              stroke="#333" 
              strokeDasharray="5,5"
            />
          ))}
          
          <line 
            x1={leftPadding} 
            y1={padding} 
            x2={leftPadding} 
            y2={chartHeight - padding} 
            stroke="#666" 
          />
          
          <line 
            x1={leftPadding} 
            y1={chartHeight - padding} 
            x2={chartWidth - padding} 
            y2={chartHeight - padding} 
            stroke="#666" 
          />
          
          {yAxisValues.map((value, i) => (
            <text 
              key={i}
              x={leftPadding - 5} 
              y={scaleY(value)} 
              textAnchor="end" 
              alignmentBaseline="middle" 
              fontSize="12"
              fill={value === 1.0 ? "#888" : "#6b7280"}
              fontWeight={value === 1.0 ? "bold" : "normal"}
            >
              {formatPrice(value)}
            </text>
          ))}
          
          {latestCandle && (
            <>
              <line 
                x1={leftPadding} 
                y1={scaleY(latestCandle.currentClose)} 
                x2={chartWidth - padding} 
                y2={scaleY(latestCandle.currentClose)} 
                stroke={latestCandle.trend > 0 ? "#4ade80" : latestCandle.trend < 0 ? "#ef4444" : "#6b7280"} 
                strokeWidth={1.5}
                strokeDasharray="5,5"
              />
              <text 
                x={chartWidth - padding - 300} 
                y={scaleY(latestCandle.currentClose) - 10} 
                textAnchor="end" 
                alignmentBaseline="middle" 
                fontSize="20"
                fill={latestCandle.trend > 0 ? "#4ade80" : latestCandle.trend < 0 ? "#ef4444" : "#6b7280"}
                fontWeight="bold"
              >
                {formatPrice(latestCandle.currentClose)}x
              </text>
            </>
          )}
          
          {renderCandles()}
        </svg>

        
        
        {!isRugged && (
          <div className="absolute top-2 right-2 text-white px-2 py-1 bg-black bg-opacity-50 rounded">
            Rug in: {secondsUntilRug}s
          </div>
        )}
        
       {isRugged && (
          <>
            {/* Gradient red background mask */}
            <div
              className="absolute inset-0 z-25 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, rgba(220, 38, 38, 0.4) 0%, rgba(220, 38, 38, 0.3) 30%, rgba(220, 38, 38, 0.2) 60%, rgba(0, 0, 0, 0) 100%)`,
              }}
            />

            {/* Full screen overlay with RUGGED!! text */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <h1 className="text-red-600 text-8xl font-extrabold animate-pulse tracking-widest shadow-lg">
                RUGGED!!
              </h1>
            </div>
          </>
        )}

        {isExploding && (
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 z-30 pointer-events-none"
            width={chartWidth}
            height={chartHeight}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}


        {/* Milestone Achievement Overlay */}
        {activeMilestone && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="milestone-text text-8xl font-extrabold tracking-wider shadow-lg"
              style={{
                color: getMilestoneColor(activeMilestone),
                textShadow: `0 0 15px ${getMilestoneColor(activeMilestone)}80, 0 0 30px ${getMilestoneColor(activeMilestone)}40`,
              }}
            >
              {activeMilestone}X
            </div>
          </div>
        )}
      </div>
      
      <div className="col-span-2 flex justify-center gap-x-4 mt-2 mb-4">
        <button
          className="flex-1 p-4 bg-green-600 border border-green-800 text-white py-3 rounded-md font-bold text-xl hover:bg-green-700 transition-transform active:scale-95"
          style={{boxShadow: '0px 4px 8px rgba(0, 255, 0, 0.3)'}}
        >
          BUY
        </button>
        <button
          className="flex-1 p-4 bg-red-600 border border-red-800 text-white py-3 rounded-md font-bold text-xl hover:bg-red-700 transition-all active:scale-95 "
          style={{
            boxShadow:'0px 4px 8px rgba(255, 0, 0, 0.3)'
          }}
        >
          SELL
        </button>
      </div>
    </div>
  );
};

export default AnimatedMultiCandleChart;