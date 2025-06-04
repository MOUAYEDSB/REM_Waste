import { SkipType } from '../types/skipTypes';

// Mock data to use if the API is unavailable
export const mockSkips: SkipType[] = [
  {
    id: "1",
    name: "Mini Skip (2-3 Yards)",
    description: "Ideal for small garden and household clearances",
    capacity: "20-30 bin bags",
    price: 199.99,
    size: "2-3 Yards",
    suitableFor: ["Small garden waste", "Home clearance", "Small renovation"],
    imageUrl: "mini-skip.jpg"
  },
  {
    id: "2",
    name: "Midi Skip (4-5 Yards)",
    description: "Perfect for medium-sized home and garden projects",
    capacity: "40-50 bin bags",
    price: 249.99,
    size: "4-5 Yards",
    suitableFor: ["Medium renovation", "Garden landscaping", "Office clearance"],
    imageUrl: "midi-skip.jpg"
  },
  {
    id: "3",
    name: "Builder's Skip (6-8 Yards)",
    description: "The most popular skip for larger domestic and commercial projects",
    capacity: "60-80 bin bags",
    price: 299.99,
    size: "6-8 Yards",
    suitableFor: ["House renovation", "Building waste", "Large clearance"],
    imageUrl: "builders-skip.jpg"
  },
  {
    id: "4",
    name: "Large Skip (10-12 Yards)",
    description: "For substantial construction and demolition projects",
    capacity: "100-120 bin bags",
    price: 399.99,
    size: "10-12 Yards",
    suitableFor: ["Commercial projects", "Major renovations", "Construction waste"],
    imageUrl: "large-skip.jpg"
  }
];