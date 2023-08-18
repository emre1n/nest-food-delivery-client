import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25282b',
        orange: '#f26521',
        purple: '#9d2862',
        green: '#10a99d',
        'secondary-bg': '#fff9ea',
      },
    },
  },
  plugins: [],
};
export default config;
