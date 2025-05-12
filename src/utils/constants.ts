// src/utils/constants.ts
export const TRADING_PAIRS = [
  { baseAsset: 'SOL', quoteAsset: 'USD', symbol: 'SOL/USD' },
  { baseAsset: 'BTC', quoteAsset: 'USD', symbol: 'BTC/USD' },
  { baseAsset: 'ETH', quoteAsset: 'USD', symbol: 'ETH/USD' }
];

export const CHART_INTERVALS = [
  { label: '1m', value: '1m' },
  { label: '5m', value: '5m' },
  { label: '15m', value: '15m' },
  { label: '1h', value: '1h' },
  { label: '4h', value: '4h' },
  { label: '1d', value: '1d' }
];

export const WS_BASE_URL = 'wss://api.example.com/ws';
export const API_BASE_URL = 'https://api.example.com';