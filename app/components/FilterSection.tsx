interface FilterOption {
    value: string;
    label: string;
  }
  
  interface FilterSectionProps {
    walletSizes: FilterOption[];
    positionSizes: FilterOption[];
    selectedWalletSize: string;
    selectedPositionSize: string;
    onWalletSizeChange: (value: string) => void;
    onPositionSizeChange: (value: string) => void;
    onCustomWalletSizeChange: (value: string) => void;
    onCustomPositionSizeChange: (value: string) => void;
    onApplyFilters: () => void;
  }
  
  export default function FilterSection({
    walletSizes,
    positionSizes,
    selectedWalletSize,
    selectedPositionSize,
    onWalletSizeChange,
    onPositionSizeChange,
    onCustomWalletSizeChange,
    onCustomPositionSizeChange,
    onApplyFilters
  }: FilterSectionProps) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          <h2 className="pixel-font text-lg">FILTER</h2>
        </div>
  
        <div className="mb-6 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Select Wallet Size</span>
          </div>
          
          {walletSizes.map((size) => (
            <div key={size.value} className="mb-2 flex items-center">
              <input
                type="radio"
                id={`wallet-${size.value}`}
                name="walletSize"
                value={size.value}
                checked={selectedWalletSize === size.value}
                onChange={() => onWalletSizeChange(size.value)}
                className="mr-3"
              />
              <label htmlFor={`wallet-${size.value}`} className="text-sm">{size.label}</label>
            </div>
          ))}
          
          <div className="mt-4">
            <label className="text-sm block mb-2">Input Custom Wallet Size</label>
            <input
              type="text"
              className="input-field bg-gray-900 rounded p-2"
              placeholder="$220k+"
              onChange={(e) => onCustomWalletSizeChange(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-sm">Select Position Size</span>
          </div>
          
          {positionSizes.map((size) => (
            <div key={size.value} className="mb-2 flex items-center">
              <input
                type="radio"
                id={`position-${size.value}`}
                name="positionSize"
                value={size.value}
                checked={selectedPositionSize === size.value}
                onChange={() => onPositionSizeChange(size.value)}
                className="mr-3"
              />
              <label htmlFor={`position-${size.value}`} className="text-sm">{size.label}</label>
            </div>
          ))}
          
          <div className="mt-4">
            <label className="text-sm block mb-2">Input Custom Position Size</label>
            <input
              type="text"
              className="input-field bg-gray-900 rounded p-2"
              placeholder="35 SOL"
              onChange={(e) => onCustomPositionSizeChange(e.target.value)}
            />
          </div>
        </div>
        
        <button
          onClick={onApplyFilters}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md transition-colors pixel-font"
        >
          APPLY FILTERS
        </button>
      </div>
    );
  }