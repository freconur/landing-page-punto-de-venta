import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    fontFamily: {
      comfortaa: ['Comfortaa'],
      signikaNegative: ['Signika Negative'],
      dmMono: ['DM Mono'],
      martianMono: ['Martian Mono'],
      nunito: ['Nunito'],
      sidebar: ['Pacifico'],
      number:['Alfa Slab One'],
      anton:['Anton'],
      poppins:['Poppins'],
      montserrat:['Montserrat']
    },
    screens: {
      xss:'320px',
      mb:'350px',
      xsm: '420px',
      xm: '480px',
      xs: '550px',
      sm: '620px',
      cz: '664px',
      tablet:'688px',
      md: '768px',
      cs: '953px',
      lg: '1024px',
      xl: '1200px'
    },
    extend: {
      colors: {
        'gd1':'#ffd286',
        'principal': '#121f3d',
        'gd2':'#ff93c8',
        'gd3':'#ff90c7',
        'gd4':'#ff5e85',
        'gold':'#e0d130',
        'navbar':'#252876',
        'gd5':'#1526cf',
        'gd6':'#228ec8',
        'gd7':'#252876',
        'location':'#13a19c',
        'footer':'#1072b0'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
