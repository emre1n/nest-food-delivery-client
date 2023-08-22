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
        secondary: '#737373',
        orange: '#f26521',
        purple: '#9d2862',
        green: '#10a99d',
        background: '#fff',
        'secondary-bg': '#fff9ea',
        'element-bg': '#f3f4f6',
      },
    },
  },
  plugins: [],
};
export default config;
