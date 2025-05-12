import { FC } from 'react';

interface CandlestickData {
  open: number;
  high: number;
  low: number;
  close: number;
}

interface MiniChartProps {
  data: { value: number; label: string }[];
}

const generateCandlestickData = (value: number): CandlestickData[] => {

  const candleCount = 5;
  const isPositive = value >= 1.5;
  const volatility = Math.min(value * 0.2, 0.8); 
  let currentPrice = 100;
  const candlesticks: CandlestickData[] = [];
  
  for (let i = 0; i < candleCount; i++) {

    const goesUp = isPositive ? 
      Math.random() > 0.3 : 
      Math.random() > 0.7;  
    
    const changePercent = volatility * Math.random();
    const priceChange = currentPrice * changePercent;
    
    let open, close, high, low;
    
    if (goesUp) {
      open = currentPrice;
      close = currentPrice + priceChange;
      high = close + (priceChange * Math.random() * 0.5);
      low = open - (priceChange * Math.random() * 0.3);
    } else {
      open = currentPrice;
      close = currentPrice - priceChange;
      high = open + (priceChange * Math.random() * 0.3);
      low = close - (priceChange * Math.random() * 0.5);
    }
    
    candlesticks.push({ open, high, low, close });
    currentPrice = close; // Set next candle's starting point
  }
  
  return candlesticks;
};

const MiniCharts: FC<MiniChartProps> = ({ data }) => {

  const average = (data.reduce((sum, item) => sum + item.value, 0) / data.length).toFixed(2);
  
  return (
    <div className="flex w-full bg-[#0d0d0f] border-b border-gray-800 text-white">
      {/* Average display on the left */}
      <div className="flex flex-col justify-center pr-6 pl-4 py-3 border-gray-800">
        <div className="text-sm text-gray-400">Average (Last 100)</div>
        <div className="text-2xl font-bold text-green-400">{average}x</div>
      </div>
      
      {/* Mini charts on the right */}
      <div className="flex-1 flex items-center justify-end space-x-1 px-2">
        {data.slice(0, 10).map((item, index) => {
          // Determine chart color based on whether multiplier is positive or negative
          const isPositive = item.value >= 1.5;
          const chartColor = isPositive ? 'green' : 'red';
          const textColor = isPositive ? 'text-green-500' : 'text-red-500';
          
          return (
            <div key={index} className="flex flex-col items-center py-2 px-1 rounded bg-[#0d0d0f] border border-gray-800">
              {/* Chart visualization */}
              <div className="h-12 w-12 relative">
                <MiniCandlestickChart 
                  multiplier={item.value} 
                  color={chartColor} 
                />
              </div>
              
              {/* Multiplier label */}
              <div className={`text-xs font-medium ${textColor}`}>
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface MiniCandlestickChartProps {
  multiplier: number;
  color: 'green' | 'red';
}

const MiniCandlestickChart: FC<MiniCandlestickChartProps> = ({ multiplier, color }) => {
  // Generate mock candlestick data
  const candlesticks = generateCandlestickData(multiplier);
  
  // Calculate min and max values to scale the chart
  const allValues = candlesticks.flatMap(c => [c.high, c.low]);
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  const range = max - min;
  
  // Scale a value to fit in the chart height
  const scaleY = (value: number): number => {
    const chartHeight = 40; // Pixels
    return chartHeight - ((value - min) / range) * chartHeight;
  };
  
  return (
    <svg width="100%" height="100%" viewBox="0 0 40 40">
      {candlesticks.map((candle, i) => {
        const x = 4 + (i * 8); // Horizontal position
        const wickTop = scaleY(candle.high);
        const wickBottom = scaleY(candle.low);
        const bodyTop = scaleY(Math.max(candle.open, candle.close));
        const bodyBottom = scaleY(Math.min(candle.open, candle.close));
        const bodyHeight = Math.max(1, bodyBottom - bodyTop); // Ensure min height of 1px
        const isUp = candle.close > candle.open;
        
        return (
          <g key={i}>
            {/* Candle wick */}
            <line 
              x1={x + 2} 
              y1={wickTop} 
              x2={x + 2} 
              y2={wickBottom} 
              stroke={isUp ? "#22c55e" : "#ef4444"} 
              strokeWidth="1" 
            />
            
            {/* Candle body */}
            <rect 
              x={x} 
              y={bodyTop} 
              width="4" 
              height={bodyHeight} 
              fill={isUp ? "#22c55e" : "#ef4444"} 
            />
          </g>
        );
      })}
    </svg>
  );
};

export default MiniCharts;