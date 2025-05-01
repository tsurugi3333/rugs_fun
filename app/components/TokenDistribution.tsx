'use client'

import React, { useState } from 'react';

// Define TypeScript interfaces
interface Segment {
  id: string;
  name: string;
  percentage: number;
  color: string;
  amount: string;
  startAngle: number;
  endAngle: number;
}

interface TooltipCoordinates {
  outerX: number;
  outerY: number;
  tooltipX: number;
  tooltipY: number;
}

interface TokenDistributionProps {
  className?: string;
}

export default function TokenDistribution({ className = '' }: TokenDistributionProps): React.ReactElement {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  
  // Distribution data
  const segments: Segment[] = [
    { 
      id: "reserve", 
      name: "Diddy Reserve", 
      percentage: 70, 
      color: "#808080", 
      amount: "700M tokens",
      startAngle: 0,
      endAngle: 252 // 70% of 360
    },
    { 
      id: "liquidity", 
      name: "Liquidity", 
      percentage: 10, 
      color: "#FFFACD", 
      amount: "100M tokens",
      startAngle: 252,
      endAngle: 288 // 252 + (10% of 360)
    },
    { 
      id: "public", 
      name: "Public Distribution", 
      percentage: 10, 
      color: "#FFD700", 
      amount: "100M tokens",
      startAngle: 288,
      endAngle: 324 // 288 + (10% of 360)
    },
    { 
      id: "team", 
      name: "Team", 
      percentage: 10, 
      color: "#ffffff", 
      amount: "100M tokens",
      startAngle: 324,
      endAngle: 360 // 324 + (10% of 360)
    }
  ];

  // Calculate SVG coordinates for tooltip lines
  const calculateTooltipCoordinates = (segment: Segment): TooltipCoordinates => {
    const midAngle = (segment.startAngle + segment.endAngle) / 2;
    const angleInRadians = (midAngle - 90) * (Math.PI / 180);
    
    // Coordinates for the outer point of the segment
    const outerX = 180 + 100 * Math.cos(angleInRadians);
    const outerY = 150 + 100 * Math.sin(angleInRadians);
    
    // Coordinates for the tooltip box
    let tooltipX = outerX + 30 * Math.cos(angleInRadians);
    let tooltipY = outerY + 30 * Math.sin(angleInRadians);
    
    // Adjust tooltip position based on segment
    if (segment.id === "team") {
      tooltipX = outerX - 60;
      tooltipY = outerY - 40;
    } else if (segment.id === "public") {
      tooltipX = outerX - 120;
      tooltipY = outerY;
    } else if (segment.id === "liquidity") {
      tooltipX = outerX - 120;
      tooltipY = outerY + 20;
    } else if (segment.id === "reserve") {
      tooltipX = outerX + 30;
      tooltipY = outerY;
    }
    
    return { outerX, outerY, tooltipX, tooltipY };
  };

  // Create SVG arc path
  const createArcPath = (
    innerRadius: number, 
    outerRadius: number, 
    startAngle: number, 
    endAngle: number
  ): string => {
    // Convert angles to radians
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    // Calculate points
    const startOuterX = 150 + outerRadius * Math.cos(startRad);
    const startOuterY = 150 + outerRadius * Math.sin(startRad);
    const endOuterX = 150 + outerRadius * Math.cos(endRad);
    const endOuterY = 150 + outerRadius * Math.sin(endRad);
    const startInnerX = 150 + innerRadius * Math.cos(startRad);
    const startInnerY = 150 + innerRadius * Math.sin(startRad);
    const endInnerX = 150 + innerRadius * Math.cos(endRad);
    const endInnerY = 150 + innerRadius * Math.sin(endRad);
    
    // Create path
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return `
      M ${startOuterX} ${startOuterY}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuterX} ${endOuterY}
      L ${endInnerX} ${endInnerY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInnerX} ${startInnerY}
      Z
    `;
  };

  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <div className="relative rounded-lg bg-orange-100 z-0">
        <div className="w-full mx-auto">
          <svg viewBox="-100 0 500 300">
            {/* Base segments - Drawn first (bottom layer) */}
            {segments.map((segment) => (
              <g key={`segment-${segment.id}`}>
                <path
                  d={createArcPath(40, 110, segment.startAngle, segment.endAngle)}
                  fill={segment.color}
                  stroke="#000"
                  strokeWidth="1"
                  onMouseEnter={() => setActiveSegment(segment.id)}
                  onMouseLeave={() => setActiveSegment(null)}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                />
              </g>
            ))}
            
            {/* Center circle */}
            <circle cx="150" cy="150" r="40" fill="white" stroke="#000" strokeWidth="1" />
            
            {/* Segment labels - Middle layer */}
            {segments.map((segment) => (
              <g key={`label-${segment.id}`}>
                <text
                  x={150 + 75 * Math.cos(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180))}
                  y={150 + 75 * Math.sin(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180))}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="500"
                >
                  {segment.name}
                </text>
                
                <text
                  x={150 + 75 * Math.cos(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180))}
                  y={150 + 75 * Math.sin(((segment.startAngle + segment.endAngle) / 2 - 90) * (Math.PI / 180)) + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="500"
                >
                  {segment.percentage}%
                </text>
              </g>
            ))}
            
            {/* Tooltips - Top layer (drawn last) */}
            {activeSegment && segments.map(segment => {
              if (segment.id === activeSegment) {
                const { outerX, outerY, tooltipX, tooltipY } = calculateTooltipCoordinates(segment);
                return (
                  <g key={`tooltip-${segment.id}`}>
                    {/* Connecting line */}
                    <line
                      x1={outerX}
                      y1={outerY}
                      x2={tooltipX}
                      y2={tooltipY}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    
                    {/* Tooltip box */}
                    <rect
                      x={tooltipX - 60}
                      y={tooltipY - 15}
                      width="120"
                      height="30"
                      fill={segment.id === 'public' ? segment.color : 'white'}
                      stroke="#000"
                      strokeWidth="1"
                    />
                    
                    {/* Tooltip text */}
                    <text
                      x={tooltipX}
                      y={tooltipY + 5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="8"
                      fontWeight="500"
                    >
                      {segment.name}
                    </text>
                    <text
                      x={tooltipX}
                      y={tooltipY - 7}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="8"
                      fontWeight="500"
                    >
                      Amount: {segment.amount}
                    </text>
                  </g>
                );
              }
              return null;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}