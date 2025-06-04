export interface SkipType {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface ApiResponse {
  skips?: SkipType[];
  status: string;
  message?: string;
}

// Helper function to get skip name based on size
export const getSkipName = (size: number): string => {
  if (size <= 4) return "Mini Skip";
  if (size <= 6) return "Midi Skip";
  if (size <= 8) return "Builder's Skip";
  if (size <= 12) return "Large Skip";
  return "Roll-on Roll-off Skip";
};

// Helper function to get suitable uses based on size
export const getSkipSuitableFor = (size: number): string[] => {
  if (size <= 4) {
    return ["Small garden waste", "Home clearance", "Small renovation"];
  }
  if (size <= 6) {
    return ["Medium renovation", "Garden landscaping", "Office clearance"];
  }
  if (size <= 8) {
    return ["House renovation", "Building waste", "Large clearance"];
  }
  if (size <= 12) {
    return ["Commercial projects", "Major renovations", "Construction waste"];
  }
  return ["Industrial waste", "Large construction", "Site clearance"];
};

// Helper function to get capacity in bin bags
export const getSkipCapacity = (size: number): string => {
  const bagsPerYard = 10;
  const totalBags = size * bagsPerYard;
  return `${totalBags} bin bags`;
};