export type OrderSide = 'buy' | 'sell';
export type OrderStatus = 'pending' | 'executed' | 'cancelled';

export interface TradeData {
  price: number;
  time: number;
}

export interface ChartData {
  symbol: string;
  interval: string;
  candles: Candle[];
  lastUpdated: string;
}

export interface OrderStats {
  average: number;
  lastPrice: number;
}

export interface UserPosition {
  username: string;
  amount: number;
  percentage: string;
}

export interface PresaleItem {
  price: number;
  description: string;
}

export interface Order {
  id?: string;
  side: OrderSide;
  amount: number;
  price?: number;
  timestamp: string;
  status?: OrderStatus;
}

export interface Trade extends Order {
  id: string;
  executedAt: string;
  executionPrice: number;
  status: 'executed';
}

export interface Candle {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}