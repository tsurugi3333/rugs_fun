import { FC, useState, useEffect } from 'react';
import { TradeData } from '../../types/trade';
import CandlestickChart from './CandlestickChart';
import { leaderboard } from '../../data/LeaderboardData';
import TradingControls from './TradingControls';

const generateDummyData = (): TradeData[] => {
  const data: TradeData[] = [];
  const now = Date.now();
  let price = 1.0;

  for (let i = 0; i < 20; i++) {
    price = price + (Math.random() * 0.1 - 0.05);
    data.push({
      price,
      time: now - (20 - i) * 60000,
    });
  }

  return data;
};

const ChartContainer: FC = () => {
  const [chartData, setChartData] = useState<TradeData[]>([]);
  const [balance, setBalance] = useState<number>(100); // Add a balance state
  const [holdings, setHoldings] = useState<number>(0); // Add holdings state
  const [currentMultiplier, setCurrentMultiplier] = useState<number>(1.0);
  const [triggerSellEffect, setTriggerSellEffect] = useState<boolean>(false);

  useEffect(() => {
    setChartData(generateDummyData());

    const interval = setInterval(() => {
      setChartData(prevData => {
        const lastPoint = prevData[prevData.length - 1];
        const newPrice = lastPoint.price + (Math.random() * 0.1 - 0.05);
        const newTime = lastPoint.time + 60000;

        return [...prevData.slice(1), { price: newPrice, time: newTime }];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get the current price from the latest chart data point
  const currentPrice = chartData.length > 0 ? chartData[chartData.length - 1].price : 0;

  // Handle buy action
  const handleBuy = (amount: number) => {
    const cost = amount * currentPrice;
    if (cost <= balance) {
      setBalance(prevBalance => prevBalance - cost);
      setHoldings(prevHoldings => prevHoldings + amount);
      console.log(`Bought ${amount} SOL at ${currentPrice}`);
    } else {
      console.log('Insufficient balance');
    }
  };

  const handleMultiplierUpdate = (multiplier: number) => {
    setCurrentMultiplier(multiplier);
  };
  // Handle sell action
  const handleSell = (percentage: number) => {
    if (holdings > 0) {
      const amountToSell = (holdings * percentage) / 100;
      const revenue = amountToSell * currentMultiplier; 
      setBalance(prevBalance => prevBalance + revenue);
      setHoldings(prevHoldings => prevHoldings - amountToSell);

      // Trigger the effect with the current multiplier
      setTriggerSellEffect(true);
      setTimeout(() => setTriggerSellEffect(false), 3000);
      
      console.log(`Sold ${amountToSell} SOL (${percentage}%) at multiplier ${currentMultiplier}x`);
    } else {
      console.log('Insufficient holdings');
    }
  };

  return (
    <div className="p-2">
      <div className="bg-black rounded-lg  relative">
        {/* Gradient masks (top and bottom) OUTSIDE scroll area */}
        <div className="absolute right-4 top-4 min-w-1/4 z-30 pointer-events-none">
          {/* Top gradient */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black to-transparent" />
        </div>

        {/* Scrollable leaderboard list */}
        <div className="absolute right-4 top-4 min-w-1/4 z-10">
          <div className="relative max-h-[340px] overflow-y-auto pr-2">
            <div className="flex flex-col space-y-2 relative z-10">
              {leaderboard.map((entry, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className={entry.isKing ? 'text-yellow-500 mr-2' : 'text-gray-400 mr-2'}>
                      {entry.icon}
                    </span>
                    <span className="text-white">{entry.name}</span>
                  </div>
                  <span className={entry.isKing ? 'text-yellow-500 ml-8' : 'text-white ml-8'}>
                    {entry.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CandlestickChart 
          height={400} 
          currency="SOL"
          onMultiplierUpdate={handleMultiplierUpdate}
          triggerSellEffect={triggerSellEffect}
        />
        
        
        
        {/* Add trading controls */}
        <TradingControls onBuy={handleBuy} onSell={handleSell} />
      </div>
    </div>
  );
};

export default ChartContainer;


//https://tenor.com/en-GB/view/crowpunk-roblox-flood-escape-fe2-flood-escape-2-gif-14448575112952858733
//https://tenor.com/en-GB/view/explosão-meme-gif-gif-5842472256224520495
//<div class="tenor-gif-embed" data-postid="14448575112952858733" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/crowpunk-roblox-flood-escape-fe2-flood-escape-2-gif-14448575112952858733">Crowpunk Roblox Sticker</a>from <a href="https://tenor.com/search/crowpunk-stickers">Crowpunk Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
//<div class="tenor-gif-embed" data-postid="5842472256224520495" data-share-method="host" data-aspect-ratio="0.702811" data-width="100%"><a href="https://tenor.com/view/explos%C3%A3o-meme-gif-gif-5842472256224520495">Explosão Meme GIF</a>from <a href="https://tenor.com/search/explos%C3%A3o-gifs">Explosão GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>