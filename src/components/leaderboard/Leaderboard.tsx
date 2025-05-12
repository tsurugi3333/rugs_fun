import { FC, useState } from 'react';
import LeaderboardItem from './LeaderboardItem';
import { LeaderboardEntry } from '../../types/user';

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard: FC<LeaderboardProps> = ({ entries }) => {
  const [activeTimeframe, setActiveTimeframe] = useState<'24hours' | '7days' | '30days'>('24hours');

  return (
    <div className="bg-[#0d0d0f] border border-gray-800 mx-2 rounded-lg text-gray-400 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className='flex text-sm items-center gap-2'>
          <button 
            className={`border border-gray-800 rounded-md p-1 transition ${activeTimeframe === '24hours' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTimeframe('24hours')}
          >
            24hours
          </button>
          <button 
            className={`border border-gray-800 rounded-md p-1 transition ${activeTimeframe === '7days' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTimeframe('7days')}
          >
            7days
          </button>
          <button 
            className={`border border-gray-800 rounded-md p-1 transition ${activeTimeframe === '30days' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTimeframe('30days')}
          >
            30days
          </button>
        </div>
        <h2 className="text-3xl uppercase">Leaderboard</h2>
        <div className='flex items-center'>
          <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
          <span className="text-xs text-gray-400">Updates every 5 minutes</span>
        </div>
      </div>
      
      <div className="flex text-gray-500 text-sm py-2 border-b border-gray-800">
        <div className="w-10 text-center">Rank</div>
        <div className="flex-1 ml-7">User</div>
        <div className="text-right">Profit</div>
      </div>
      
      {/* Scrollable container with hidden scrollbar */}
      <div className="max-h-64 overflow-y-auto scrollbar-hide">
        {entries.map((entry, index) => (
          <LeaderboardItem
            key={entry.user.username}
            rank={index + 1}
            user={entry.user}
            profit={entry.profit}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

