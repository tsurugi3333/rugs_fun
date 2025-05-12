import { FC, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { TradeData } from '../../types/trade';

Chart.register(...registerables);

interface TradingChartProps {
  data: TradeData[];
  height?: number;
  showControls?: boolean;
}

const TradingChart: FC<TradingChartProps> = ({ data, height = 400, showControls = true }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        chartInstance.current = new Chart(ctx, {
          type: 'line', // Changed from 'candlestick' to 'line' as Chart.js doesn't have a built-in candlestick type
          data: {
            labels: data.map(d => new Date(d.time).toLocaleTimeString()),
            datasets: [
              {
                label: 'Price',
                data: data.map(d => d.price),
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                tension: 0.4,
                pointRadius: 2,
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                  color: '#9ca3af',
                },
              },
              y: {
                position: 'right',
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                  color: '#9ca3af',
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
              },
            },
          },
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full relative" style={{ height: `${height}px` }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TradingChart;