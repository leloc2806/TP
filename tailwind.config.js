/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        "bgactive": "var(--bgactive)"
      },
      
      fontSize: {
        "titleBig": "var(--titleBig)",
        "titleSmall": "var(--titleSmall)",
        "titleMedium": "var(--titleMedium)"
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: theme('opacity.0') },
          '100%': { opacity: theme('opacity.1') },
        },
      }),

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },    

    },
  },
  plugins: [],
};
