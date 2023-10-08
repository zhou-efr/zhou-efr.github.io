import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkgray: '#292929',
        lightgray: '#C4C3C3',
        verylightgray: '#E9E9E9',
      }
    },
  },
  plugins: [],
}
export default config
