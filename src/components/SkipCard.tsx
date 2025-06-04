import React from 'react';
import { SkipType, getSkipName, getSkipSuitableFor, getSkipCapacity } from '../types/skipTypes';
import { Check, HelpCircle, Trash2 } from 'lucide-react';

interface SkipCardProps {
  skip: SkipType;
  isSelected: boolean;
  onSelect: (skip: SkipType) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const skipName = getSkipName(skip.size);
  const suitableFor = getSkipSuitableFor(skip.size);
  const capacity = getSkipCapacity(skip.size);

  return (
    <div 
      className={`
        flex flex-col md:flex-row
        relative overflow-hidden transition-all duration-300 
        ${isSelected 
          ? 'shadow-[0_0_30px_rgba(13,148,136,0.15)] scale-[1.02] bg-gradient-to-br from-teal-50 to-white' 
          : 'shadow-lg hover:shadow-xl bg-white'
        }
        cursor-pointer mb-6 rounded-2xl border border-gray-100
      `}
      onClick={() => onSelect(skip)}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 bg-teal-600 text-white p-2 rounded-full shadow-lg">
          <Check size={20} />
        </div>
      )}
      
      {/* Skip Image Section */}
      <div className="flex items-center justify-center p-8 md:w-1/3 bg-gradient-to-br from-gray-50 to-white">
        <div className="relative flex items-center justify-center w-full aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full"></div>
          <Trash2 
            size={100} 
            className={`transition-colors duration-300 ${isSelected ? 'text-teal-600' : 'text-gray-400'}`}
          />
          <div className="absolute top-0 left-0 bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            {skip.size} Yards
          </div>
        </div>
      </div>
      
      {/* Skip Details Section */}
      <div className="flex flex-col flex-grow p-8">
        <div className="flex-grow">
          {/* Header */}
          <div className="flex flex-col mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{skipName}</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className={`px-3 py-1 rounded-full ${skip.allowed_on_road ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {skip.allowed_on_road ? '✓ Road placement' : '⚠ Private land only'}
              </span>
              <span className={`px-3 py-1 rounded-full ${skip.allows_heavy_waste ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                {skip.allows_heavy_waste ? '✓ Heavy waste' : 'Light waste only'}
              </span>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-col space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Suitable For:</h4>
              <div className="flex flex-wrap gap-2">
                {suitableFor.map((item, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-700 text-sm font-semibold mr-2">Capacity:</span>
              <span className="text-gray-600">{capacity}</span>
              <button className="ml-1 text-gray-400 hover:text-gray-700 transition-colors">
                <HelpCircle size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
          <div className="text-gray-500 text-sm">
            {skip.hire_period_days} days hire included
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm text-gray-500">Total inc. VAT</div>
            <div className="text-3xl font-bold text-teal-700">£{totalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;