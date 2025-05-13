import { FC, useState, useEffect } from 'react';
import { TradeData } from '../../types/trade';
import TradingViewWidget from './NewCandle';

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
  const triggerSellEffect = false;

  console.log(chartData);

  useEffect(() => {
    setChartData(generateDummyData());

    console.log(triggerSellEffect);

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

  return (
    <div className="p-2">
        <TradingViewWidget />
    </div>
  );
};

export default ChartContainer;


//https://tenor.com/en-GB/view/crowpunk-roblox-flood-escape-fe2-flood-escape-2-gif-14448575112952858733
//https://tenor.com/en-GB/view/explosão-meme-gif-gif-5842472256224520495
//<div class="tenor-gif-embed" data-postid="14448575112952858733" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/crowpunk-roblox-flood-escape-fe2-flood-escape-2-gif-14448575112952858733">Crowpunk Roblox Sticker</a>from <a href="https://tenor.com/search/crowpunk-stickers">Crowpunk Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
//<div class="tenor-gif-embed" data-postid="5842472256224520495" data-share-method="host" data-aspect-ratio="0.702811" data-width="100%"><a href="https://tenor.com/view/explos%C3%A3o-meme-gif-gif-5842472256224520495">Explosão Meme GIF</a>from <a href="https://tenor.com/search/explos%C3%A3o-gifs">Explosão GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>