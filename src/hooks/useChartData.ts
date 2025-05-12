// src/hooks/useChartData.ts
import { useState, useEffect } from 'react';
import { ChartData, Candle } from '../types/trade';

// This is a mock implementation - in a real app, this would fetch from an API
const useChartData = (symbol: string, interval: string) => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        // For now, we'll generate mock data
        const mockData: ChartData = {
          symbol,
          interval,
          candles: generateMockCandles(30),
          lastUpdated: new Date().toISOString()
        };
        
        setChartData(mockData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch chart data'));
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Set up polling for updates
    const intervalId = setInterval(fetchData, 5000);
    
    return () => clearInterval(intervalId);
  }, [symbol, interval]);
  
  return { chartData, loading, error };
};

// Helper function to generate mock candle data
function generateMockCandles(count: number): Candle[] {
  const candles: Candle[] = [];
  let basePrice = 0.9 + Math.random() * 0.2; // Between 0.9 and 1.1
  
  for (let i = 0; i < count; i++) {
    const volatility = 0.02;
    const change = (Math.random() - 0.5) * volatility;
    
    basePrice = basePrice + change;
    const open = basePrice;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * volatility * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * 0.5;
    
    candles.push({
      timestamp: new Date(Date.now() - (count - i) * 60000).toISOString(),
      open,
      high,
      low,
      close,
      volume: Math.random() * 1000
    });
  }
  
  return candles;
}

export default useChartData;