import { ApiResponse, SkipType } from '../types/skipTypes';

export const fetchSkips = async (postcode: string, area: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch skip data');
    }
    
    const skips: SkipType[] = await response.json();
    return {
      status: 'success',
      skips: skips.sort((a, b) => a.size - b.size)
    };
  } catch (error) {
    console.error('Error fetching skip data:', error);
    return {
      status: 'error',
      message: 'Failed to load skip options. Please try again.',
      skips: []
    };
  }
};