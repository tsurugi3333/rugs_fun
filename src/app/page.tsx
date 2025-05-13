'use client';

import { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import ChartContainer from '../components/trading/ChartContainer';
import MiniCharts from '../components/trading/MiniCharts';
import ChatBox from '../components/chat/ChatBox';
import { TradeProvider } from '../context/TradeContext';
import { UserProvider } from '../context/UserContext';
import { mockMultipliers, mockChatMessages } from '../data/MockData';

export default function Home() {
  const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {

        console.log(isLeaderboardVisible);
        const { scrollTop } = mainContentRef.current;
        
        const scrollThreshold = 100;
        
        if (scrollTop > scrollThreshold) {
          setIsLeaderboardVisible(true);
        } else {
          setIsLeaderboardVisible(false);
        }
      }
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <UserProvider>
      <TradeProvider>
        <Layout>
          <div className="flex flex-col h-screen">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Chat sidebar */}
              <div className="w-full lg:w-1/4 xl:w-1/5 h-full">
                <ChatBox messages={mockChatMessages} />
              </div>
              
              {/* Main content - Chart and trading controls */}
              <div 
                ref={mainContentRef}
                className="w-full lg:w-3/4 xl:w-4/5 flex flex-col overflow-y-auto"
              >
                <div>
                  <MiniCharts data={mockMultipliers} />
                </div>
                
                <div>
                  <ChartContainer />
                </div>


                <div className="pb-8"></div>
              </div>
            </div>
          </div>
        </Layout>
      </TradeProvider>
    </UserProvider>
  );
}