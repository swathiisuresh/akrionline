// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // From Branding Plan (Section 4)
//         'brand': {
//           'green': '#2D6A4F',    // Primary: Deep forest green for trust 
//           'light': '#52B788',    // Mid green for accents and hovers 
//           'bg': '#F4F7F4',       // Off-white green tint for easy reading 
//           'dark': '#1A1A1A',     // Near-black for high readability 
//           'navy': '#0D3B66',     // B2B Dealer Accent 
//         },
//       },
//       fontFamily: {
//         // Typography Direction (Section 4)
//         'heading': ['Plus Jakarta Sans', 'sans-serif'], // Modern, friendly energy 
//         'body': ['Inter', 'DM Sans', 'sans-serif'],    // Clean and readable 
//       },
//       animation: {
//         // For staggered entrance effects (Section 2.2)
//         'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2D6A4F',
        'brand-light': '#52B788',
        'brand-bg': '#F4F7F4',
        'brand-dark': '#1A1A1A',
        'brand-navy': '#0D3B66',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
}