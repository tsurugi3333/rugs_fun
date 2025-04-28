import React, { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSectionProps {
  walletSizes: FilterOption[];
  positionSizes: FilterOption[];
  selectedWalletSize: string;
  selectedPositionSize: string;
  onWalletSizeChange: (size: string) => void;
  onPositionSizeChange: (size: string) => void;
  onCustomWalletSizeChange: (size: string) => void;
  onCustomPositionSizeChange: (size: string) => void;
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
  const [showCustomWallet, setShowCustomWallet] = useState(false);
  const [showCustomPosition, setShowCustomPosition] = useState(false);
  const [tempCustomWallet, setTempCustomWallet] = useState('');
  const [tempCustomPosition, setTempCustomPosition] = useState('');

  const handleCustomWalletToggle = () => {
    setShowCustomWallet(!showCustomWallet);
    if (!showCustomWallet) {
      onWalletSizeChange('custom');
    } else {
      onWalletSizeChange(walletSizes[0].value);
      onCustomWalletSizeChange('');
    }
  };

  const handleCustomPositionToggle = () => {
    setShowCustomPosition(!showCustomPosition);
    if (!showCustomPosition) {
      onPositionSizeChange('custom');
    } else {
      onPositionSizeChange(positionSizes[0].value);
      onCustomPositionSizeChange('');
    }
  };

  const handleCustomWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempCustomWallet(e.target.value);
  };

  const handleCustomPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempCustomPosition(e.target.value);
  };

  const handleApply = () => {
    if (showCustomWallet) {
      onCustomWalletSizeChange(tempCustomWallet);
    }
    
    if (showCustomPosition) {
      onCustomPositionSizeChange(tempCustomPosition);
    }
    
    onApplyFilters();
  };

  return (
    <div className="min-h-130 bg-gray-900 border border-gray-700 rounded-lg p-6">
      <h2 className="pixel-font text-xl mb-6">FILTERS</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Wallet Size</label>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {walletSizes.map((size) => (
            <button
              key={size.value}
              onClick={() => {
                onWalletSizeChange(size.value);
                setShowCustomWallet(false);
              }}
              className={`py-2 px-4 text-sm rounded ${
                selectedWalletSize === size.value
                  ? 'bg-navy-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center mb-2">
          <button
            onClick={handleCustomWalletToggle}
            className={`flex items-center text-sm ${
              showCustomWallet ? 'text-navy-400' : 'text-gray-400'
            }`}
          >
            <svg
              className={`h-4 w-4 mr-1 ${
                showCustomWallet ? 'text-navy-400' : 'text-gray-500'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showCustomWallet ? (
                <path d="M19 9l-7 7-7-7"></path>
              ) : (
                <path d="M9 5l7 7-7 7"></path>
              )}
            </svg>
            Custom
          </button>
        </div>
        
        {showCustomWallet && (
          <div className="mt-2">
            <div className="flex items-center">
              <span className="text-sm mr-2">$</span>
              <input
                type="number"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
                placeholder="Enter custom amount"
                value={tempCustomWallet}
                onChange={handleCustomWalletChange}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Position Size</label>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {positionSizes.map((size) => (
            <button
              key={size.value}
              onClick={() => {
                onPositionSizeChange(size.value);
                setShowCustomPosition(false);
              }}
              className={`py-2 px-4 text-sm rounded ${
                selectedPositionSize === size.value
                  ? 'bg-navy-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center mb-2">
          <button
            onClick={handleCustomPositionToggle}
            className={`flex items-center text-sm ${
              showCustomPosition ? 'text-navy-400' : 'text-gray-400'
            }`}
          >
            <svg
              className={`h-4 w-4 mr-1 ${
                showCustomPosition ? 'text-navy-400' : 'text-gray-500'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showCustomPosition ? (
                <path d="M19 9l-7 7-7-7"></path>
              ) : (
                <path d="M9 5l7 7-7 7"></path>
              )}
            </svg>
            Custom
          </button>
        </div>
        
        {showCustomPosition && (
          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="number"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
                placeholder="Enter SOL amount"
                value={tempCustomPosition}
                onChange={handleCustomPositionChange}
              />
              <span className="text-sm ml-2">SOL</span>
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={handleApply}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded transition-colors cursor-pointer"
      >
        <span className="text-xl">APPLY FILTERS</span>
      </button>
    </div>
  );
}