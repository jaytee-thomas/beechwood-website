/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          beechwood: {
            // Legacy colors (keep for backward compatibility)
            navy: '#1a1a2e',
            blue: '#0f3460',
            red: '#e94560',
            mint: '#16c79a',
            cream: '#f5f5f5',
            // New brand colors from logo
            forest: '#0d4d2d',      // Deep forest green (darkest)
            main: '#2d6a4f',        // Main brand green
            sage: '#52b788',        // Medium sage
            lime: '#95d5b2',        // Bright lime
            mint: '#b7e4c7',        // Light mint
            tech: '#74c69d',        // Tech accent green
            // Tailwind scale for consistency
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
        },
        fontFamily: {
          gamay: ['Gamay', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // Beechwood brand gradients
          'gradient-beechwood': 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)',
          'gradient-forest': 'linear-gradient(135deg, #0d4d2d 0%, #2d6a4f 100%)',
          'gradient-sage': 'linear-gradient(135deg, #52b788 0%, #95d5b2 100%)',
        },
      },
    },
    plugins: [],
  }