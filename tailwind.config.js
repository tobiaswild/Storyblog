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
        backgroundColor: theme => ({
            'color1': '354F52',
            'color2': 'A63A50',
            'color3': 'C3A29E',
            'color4': 'A9C5A0',
            'color5': '8CBCB9',
            'color6': '896978',
        }),
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
}
