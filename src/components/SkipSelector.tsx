import React, { useEffect, useState } from 'react';
import { SkipType } from '../types/skipTypes';
import { fetchSkips } from '../services/skipService';
import SkipCard from './SkipCard';
import ProgressBar from './ProgressBar';
import { ArrowLeftCircle, ArrowRightCircle, HelpCircle } from 'lucide-react';

const SkipSelector: React.FC = () => {
  const [skips, setSkips] = useState<SkipType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<SkipType | null>(null);
  
  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const response = await fetchSkips('NR32', 'Lowestoft');
        
        if (response.status === 'error') {
          setError(response.message || 'Failed to load skip options');
        } else {
          setSkips(response.skips || []);
          setError(null);
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    loadSkips();
  }, []);
  
  const handleSelectSkip = (skip: SkipType) => {
    setSelectedSkip(skip);
  };
  
  const handlePreviousStep = () => {
    console.log('Navigate to previous step');
  };
  
  const handleNextStep = () => {
    if (selectedSkip) {
      console.log('Selected skip:', selectedSkip);
    }
  };
  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-teal-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Loading skip options...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-md w-full">
          <p className="text-red-700 mb-2">{error}</p>
          <button 
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto">
      <ProgressBar currentStep={2} totalSteps={4} />
      
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Skip Size</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Select the skip size that best suits your waste disposal needs. All prices include VAT and delivery.
        </p>
      </div>
      
      <div className="flex flex-col space-y-6">
        {skips.length > 0 ? (
          skips.map((skip) => (
            <SkipCard 
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={handleSelectSkip}
            />
          ))
        ) : (
          <div className="flex items-center justify-center p-12 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 text-lg">No skip options available for this location.</p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 py-6 border-t border-gray-200">
        <button
          onClick={handlePreviousStep}
          className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors w-full sm:w-auto"
        >
          <ArrowLeftCircle size={20} className="mr-2" />
          Previous Step
        </button>
        
        <div className="flex items-center text-gray-500">
          <HelpCircle size={18} className="mr-2" />
          <span>Need help? Call 0800 123 4567</span>
        </div>
        
        <button
          onClick={handleNextStep}
          disabled={!selectedSkip}
          className={`
            flex items-center justify-center px-8 py-3 rounded-full w-full sm:w-auto font-medium
            ${selectedSkip 
              ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
            transition-all duration-300
          `}
        >
          Continue to Booking
          <ArrowRightCircle size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SkipSelector;