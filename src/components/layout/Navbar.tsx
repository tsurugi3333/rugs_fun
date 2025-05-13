import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <header className="bg-primary p-4 border-b border-gray-800 flex items-center justify-between">
      <div className="flex items-center">
        {/* <Link href="/" className="flex items-center">
          <img src="/images/rugsfun_combination_mark_beta.png" width={200} alt="RugsFun Logo" />
        </Link>
        
        <div className="ml-6 flex items-center space-x-4">
          <button className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
            <span>?</span>
          </button>
          <button className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
            <span>⚖️</span>
          </button>
        </div> */}
      </div>
      
      {/* <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <div className="flex items-center bg-gray-800 rounded-md px-3 py-1">
            <span className="text-white">CRATES</span>
            <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">1</span>
          </div>
        </div>

        <div className="mr-6 flex flex-col">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/images/tier0.png" alt="Shield" className="w-8 h-8 mr-2" />
              <span className="text-blue-400">Level 2</span>
              <span className="ml-1 text-gray-500 rounded-full border border-gray-600 w-4 h-4 flex items-center justify-center text-xs">ⓘ</span>
            </div>
          </div>

          <div className="w-32 h-2 bg-blue-900 rounded-full mt-1">
            <div className="h-full bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="mr-6 flex flex-col">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="text-yellow-400">Rugpass</span>
            <span className="ml-1 bg-yellow-600 text-xs px-2 py-0.5 rounded text-white">Tier 2</span>
          </div>

          <div className="flex space-x-1 mt-1">
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index < 2 ? 'bg-gray-200' : 'bg-gray-600'}`}
                style={{boxShadow: '1px 1px 3px rgba(255, 255, 255, 3)'}}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center text-md space-x-2">
          <button className="bg-primary border border-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-800 transition">
            WITHDRAW
          </button>
          <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition">
            DEPOSIT
          </button>
          <button className="bg-white text-black px-4 py-1 rounded-md font-bold hover:bg-gray-100 transition">
            Mooncity
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;