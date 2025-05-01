import React from 'react';

// Donut chart component using SVG
const DonutChart: React.FC<{
  data: { name: string; value: number; color: string }[];
  size?: number;
}> = ({ data, size = 300 }) => {
  const radius = size / 2;
  const innerRadius = radius * 0.6;
  const center = size / 2;
  
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Generate the SVG path for each segment
  let startAngle = 0;
  const segments = data.map((item, index) => {
    const angle = (item.value / total) * 360;
    const endAngle = startAngle + angle;
    
    // Convert angles to radians for calculations
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    const x1 = center + innerRadius * Math.cos(startRad);
    const y1 = center + innerRadius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(startRad);
    const y2 = center + radius * Math.sin(startRad);
    const x3 = center + radius * Math.cos(endRad);
    const y3 = center + radius * Math.sin(endRad);
    const x4 = center + innerRadius * Math.cos(endRad);
    const y4 = center + innerRadius * Math.sin(endRad);
    
    // Flag for arc direction (always use 0 for angles < 180, 1 for >= 180)
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    // Path string
    const path = [
      `M ${x1},${y1}`,
      `L ${x2},${y2}`,
      `A ${radius},${radius} 0 ${largeArcFlag} 1 ${x3},${y3}`,
      `L ${x4},${y4}`,
      `A ${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${x1},${y1}`,
      `Z`
    ].join(' ');
    
    startAngle = endAngle;
    
    return (
      <path 
        key={index} 
        d={path} 
        fill={item.color} 
        stroke="none"
      />
    );
  });
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={center} cy={center} r={innerRadius * 0.9} fill="#1E1E1E" />
      {segments}
    </svg>
  );
};

// Define types for token data
interface TokenData {
  ticker: string;
  network: string;
  totalSupply: number;
  totalUnlockDuration: number;
  circulatingSupplyAtTGE: number;
  distributionGroups: {
    name: string;
    percentage: number;
    color: string;
    unlockAtTGE: boolean;
    cliffPeriodMonths: number;
    vestingPeriodMonths: number;
  }[];
}

// $DIDDY token data
const tokenData: TokenData = {
  ticker: "$DIDDY",
  network: "Solana",
  totalSupply: 1_000_000_000,
  totalUnlockDuration: 36,
  circulatingSupplyAtTGE: 200_000_000,
  distributionGroups: [
    {
      name: "Liquidity",
      percentage: 10,
      color: "#FF4D4D", // Red
      unlockAtTGE: true,
      cliffPeriodMonths: 0,
      vestingPeriodMonths: 0
    },
    {
      name: "Public Distribution",
      percentage: 10,
      color: "#FFA64D", // Orange/Yellow
      unlockAtTGE: true,
      cliffPeriodMonths: 0,
      vestingPeriodMonths: 0
    },
    {
      name: "Team",
      percentage: 10,
      color: "#4D9EFF", // Blue
      unlockAtTGE: false,
      cliffPeriodMonths: 3,
      vestingPeriodMonths: 36
    },
    {
      name: "DIDDY",
      percentage: 70,
      color: "#6AFF4D", // Green
      unlockAtTGE: false,
      cliffPeriodMonths: 3,
      vestingPeriodMonths: 36
    }
  ]
};

// Format number with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Token Distribution Dashboard Component
const TokenDistributionDashboard: React.FC = () => {
  const chartData = tokenData.distributionGroups.map(group => ({
    name: group.name,
    value: group.percentage,
    color: group.color
  }));

  return (
    <div className="w-full mt-44 md:mt-44 lg:mt-44">
      <div className="max-w-7xl flex flex-col lg:flex-row gap-4 lg:gap-6 text-center items-center mx-auto">
        {/* Project Summary Card */}
        <div className="w-full lg:w-5/12 bg-gray-800 rounded-lg overflow-hidden text-left relative">
          
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white text-lg font-bold">Project Summary</h2>
          </div>
          
          <div className="divide-y divide-gray-700">
            <div className="p-4">
              <p className="text-gray-400 text-sm">Ticker</p>
              <p className="text-white text-2xl font-bold">{tokenData.ticker}</p>
            </div>
            
            <div className="p-4">
              <p className="text-gray-400 text-sm">Network</p>
              <p className="text-white text-2xl font-bold">{tokenData.network}</p>
            </div>
            
            <div className="p-4">
              <p className="text-gray-400 text-sm">Total Supply</p>
              <p className="text-white text-2xl font-bold">{formatNumber(tokenData.totalSupply)}</p>
            </div>
            
            <div className="p-4">
              <p className="text-gray-400 text-sm">Total Unlock Duration</p>
              <p className="text-white text-2xl font-bold">{tokenData.totalUnlockDuration} Months</p>
            </div>
            
            <div className="p-4">
              <p className="text-gray-400 text-sm">Circulating Supply at TGE</p>
              <p className="text-white text-2xl font-bold">{formatNumber(tokenData.circulatingSupplyAtTGE)}</p>
            </div>
          </div>
        </div>
        
        {/* Distribution Chart Card */}
        <div className="w-full lg:w-7/12 bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white text-lg font-bold">{tokenData.ticker} Distribution by Group</h2>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Chart */}
            <div className="md:w-7/12 p-4 flex justify-center items-center border-r-2 border-gray-700">
              <DonutChart data={chartData} size={280} />
            </div>
            
            {/* Distribution Details */}
            <div className="md:w-5/12 divide-y divide-gray-700">
              {tokenData.distributionGroups.map((group, index) => (
                <div key={index} className="p-4">
                  <p className="text-gray-400 text-sm">{group.name}</p>
                  <p className="text-2xl font-bold" style={{ color: group.color }}>{group.percentage}%</p>
                  <p className="text-gray-400 text-xs">
                    {group.unlockAtTGE 
                      ? "100% unlock at TGE" 
                      : `${group.cliffPeriodMonths}-month cliff, followed by ${group.vestingPeriodMonths}-month linear vesting`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Tokenomics component with the dashboard integrated
interface TokenomicsProps {
  fullPage?: boolean;
}

export default function Tokenomics({ fullPage = false }: TokenomicsProps) {
  return (
    <section id="tokenomics" className={`py-8 sm:py-12 md:py-16 bg-white relative ${fullPage ? 'pt-16 sm:pt-20 md:pt-24' : ''}`}>
      <div className="container flex flex-col text-center items-center mx-auto px-4 sm:px-6 relative">
        {/* Header image - responsive */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto absolute z-10">
          <img 
            src="/images/tokenmic-header.png" 
            alt="Tokenomics" 
            className="w-full h-auto"
            width={300}
          />
        </div>
        {/* Token Distribution Dashboard */}
        <TokenDistributionDashboard />
      </div>
    </section>
  );
}