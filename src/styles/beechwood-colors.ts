/**
 * Beechwood Official Color Scheme
 * Extracted from brand logo - Brain Tree design
 * Nature meets Technology theme
 */

export const beechwoodColors = {
  // Primary Greens (from logo)
  primary: {
    forest: '#0d4d2d',      // Deep forest green (darkest)
    beechwood: '#2d6a4f',   // Main brand green
    sage: '#52b788',        // Medium sage
    lime: '#95d5b2',        // Bright lime
    mint: '#b7e4c7',        // Light mint
    tech: '#74c69d',        // Tech accent green
  },
  
  // Gradient combinations
  gradients: {
    primary: 'from-[#2d6a4f] to-[#52b788]',
    secondary: 'from-[#52b788] to-[#95d5b2]',
    dark: 'from-[#0d4d2d] to-[#2d6a4f]',
    bright: 'from-[#74c69d] to-[#b7e4c7]',
  },
  
  // Background colors
  backgrounds: {
    darkest: '#0a0a0f',     // Main dark bg
    dark: '#0d1117',        // Secondary dark
    card: '#1a1a2e',        // Card background
  },
  
  // Border colors
  borders: {
    default: 'rgba(45, 106, 79, 0.3)',   // 30% opacity beechwood
    hover: 'rgba(82, 183, 136, 0.5)',    // 50% opacity sage
    active: 'rgba(116, 198, 157, 0.7)',  // 70% opacity tech
  },
  
  // Shadow colors
  shadows: {
    primary: 'rgba(45, 106, 79, 0.5)',   // beechwood shadow
    secondary: 'rgba(82, 183, 136, 0.5)', // sage shadow
  }
};

// Export for easy importing
export default beechwoodColors;

