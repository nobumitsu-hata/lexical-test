module.exports = {
  mode: 'jit',
  plugins: [require('postcss-nested')],
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        // dark: '#111111',
      },
    },
    fontFamily: {
      opening: ['Hiragino Kaku Gothic ProN', 'Meiryo', 'sans-serif'],
      sans: [
        'Montserrat',
        'Noto Sans JP',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
      ],
      serif: [
        'Noto Serif JP',
        'YuMincho',
        'Yu Mincho',
        'Times New Roman',
        'serif',
      ],
    },
    fontSize: {
      '2xl': ['1.5rem', '1'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      base: ['1rem', '1'],
      lg: ['1.125rem', '1'],
      sm: ['0.875rem', '1'],
      xl: ['1.25rem', '1'],
      xs: ['0.75rem', '1'],
    },
  },
}
