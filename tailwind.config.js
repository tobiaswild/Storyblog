const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media',
    theme: {
        fontFamily: {
            normal: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            crazy: ['Amatic SC'],
        },
        colors: {
            white: colors.white,
            color1: '#354f52',
            color2: '#a63a50',
            color3: '#c3a29e',
            color4: '#a9c5a0',
            color5: '#8cbcb9',
            color6: '#896978',
            dark: '#121212',
        },
        screens: {
            sm: { min: '200px', max: '639px' },
            md: { min: '640px', max: '1023px' },
            lg: { min: '1024px', max: '1279px' },
            xl: { min: '1280px', max: '1535px' },
            '2xl': { min: '1536px' },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
