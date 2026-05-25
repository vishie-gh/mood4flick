import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
