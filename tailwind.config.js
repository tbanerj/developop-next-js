/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: { max: '575px' },
        '2xs': { min: '300px' },
      },
      colors: {
        'deep-teal': '#003F4D',
        'light-teal': '#02B4BE',
        'baby-blue': '#0096B8',
        'baby-teal': '#00757B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
