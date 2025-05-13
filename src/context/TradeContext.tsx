// src/context/TradeContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Trade, Order, Candle } from '../types/trade';

interface TradeContextType {
  trades: Trade[];
  orders: Order[];
  currentPrice: number;
  balance: number;
  placeOrder: (order: Order) => void;
  cancelOrder: (orderId: string) => void;
  chartData: Candle[]; // Now properly typed with Candle
  miniChartData: { value: number; label: string }[];
  presaleData: {
    position: number;
    price: number;
    timeRemaining: number;
  };
}

const defaultContext: TradeContextType = {
  trades: [],
  orders: [],
  currentPrice: 0.7004,
  balance: 0.123,
  placeOrder: () => {},
  cancelOrder: () => {},
  chartData: [],
  miniChartData: [],
  presaleData: {
    position: 1.00,
    price: 1.00,
    timeRemaining: 2.25,
  },
};

export const TradeContext = createContext<TradeContextType>(defaultContext);

// Mock chart data generation
const generateMockChartData = (length = 30): Candle[] => {
  const data: Candle[] = [];
  let price = 0.7;
  
  for (let i = 0; i < length; i++) {
    const isGreen = Math.random() > 0.5;
    const open = price;
    const volatility = Math.random() * 0.05; // 5% max volatility
    
    let close: number;
    if (isGreen) {
      close = open * (1 + volatility);
    } else {
      close = open * (1 - volatility);
    }
    
    const high = Math.max(open, close) * (1 + Math.random() * 0.02);
    const low = Math.min(open, close) * (1 - Math.random() * 0.02);
    
    data.push({
      timestamp: new Date(Date.now() - (length - i) * 60000).toISOString(),
      open,
      high,
      low,
      close,
      volume: Math.random() * 1000,
    });
    
    price = close;
  }
  
  return data;
};

export const TradeProvider = ({ children }: { children: ReactNode }) => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPrice, setCurrentPrice] = useState(0.7004);
  const [balance, setBalance] = useState(0.123);
  const [chartData, setChartData] = useState<Candle[]>(generateMockChartData());
  
  // Mock data for mini charts
  const miniChartData = [
    { value: 5.58, label: '5.58x' },
    { value: 1.24, label: '1.24x' }, 
    { value: 2.23, label: '2.23x' },
    { value: 1.33, label: '1.33x' },
    { value: 1.63, label: '1.63x' },
    { value: 4.29, label: '4.29x' },
    { value: 30.17, label: '30.17x' },
    { value: 2.15, label: '2.15x' },
    { value: 3.19, label: '3.19x' },
    { value: 1.23, label: '1.23x' },
  ];
  
  // Mock presale data
  const [presaleData, setPresaleData] = useState({
    position: 1.00,
    price: 1.00,
    timeRemaining: 2.25,
  });

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Random price fluctuation
      const change = (Math.random() - 0.5) * 0.01; // -0.5% to +0.5%
      const newPrice = currentPrice * (1 + change);
      setCurrentPrice(parseFloat(newPrice.toFixed(4)));
      
      // Add new candle to chart data periodically
      if (Math.random() > 0.7) {
        const lastCandle = chartData[chartData.length - 1];
        const newCandle: Candle = {
          timestamp: new Date().toISOString(),
          open: lastCandle.close,
          close: newPrice,
          high: Math.max(lastCandle.close, newPrice) * (1 + Math.random() * 0.01),
          low: Math.min(lastCandle.close, newPrice) * (1 - Math.random() * 0.01),
          volume: Math.random() * 1000,
        };
        
        setChartData(prev => [...prev.slice(1), newCandle]);
      }
      
      // Update presale countdown
      if (presaleData.timeRemaining > 0) {
        setPresaleData(prev => ({
          ...prev,
          timeRemaining: Math.max(0, prev.timeRemaining - 0.1),
        }));
      }
    }, 2000); // Update every 2 seconds
    
    return () => clearInterval(interval);
  }, [currentPrice, chartData, presaleData]);

  // Place order function
  const placeOrder = (order: Order) => {
    // Generate unique ID
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`,
      status: 'pending',
      timestamp: new Date().toISOString(),
    }; 
    
    setOrders(prev => [...prev, newOrder]);
    
    // Simulate order execution after a delay
    setTimeout(() => {
      setOrders(prev => prev.filter(o => o.id !== newOrder.id));
      
      // Add to trades
      const trade: Trade = {
        id: `trade-${Date.now()}`,
        side: newOrder.side,
        amount: newOrder.amount,
        price: newOrder.price,
        timestamp: newOrder.timestamp,
        status: 'executed',
        executedAt: new Date().toISOString(),
        executionPrice: currentPrice,
      };
      
      setTrades(prev => [...prev, trade]);
      
      // Update balance
      if (newOrder.side === 'buy') {
        setBalance(prev => prev - newOrder.amount);
      } else {
        setBalance(prev => prev + newOrder.amount);
      }
    }, Math.random() * 2000 + 500); // Execute between 0.5 and 2.5 seconds
  };

  // Cancel order function
  const cancelOrder = (orderId: string) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  };

  return (
    <TradeContext.Provider value={{
      trades,
      orders,
      currentPrice,
      balance,
      placeOrder,
      cancelOrder,
      chartData,
      miniChartData,
      presaleData,
    }}>
      {children}
    </TradeContext.Provider>
  );
};