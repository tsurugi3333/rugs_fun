import { FC } from 'react';

interface MiniChartProps {
  data: { value: number; label: string }[];
}



const MiniCharts: FC<MiniChartProps> = () => {

  
  return (
    <div className="flex w-full bg-[#0d0d0f] border-b border-gray-800 text-white">
      {/* Average display on the left */}
      <div className="flex flex-col justify-center pr-6 pl-4 mb-30 border-gray-800">
        {/* <div className="text-sm text-gray-400">Average (Last 100)</div>
        <div className="text-2xl font-bold text-green-400">{average}x</div> */}
      </div>
    </div>
  );
};


export default MiniCharts;