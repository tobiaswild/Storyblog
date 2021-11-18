module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/über',
                destination: '/ueber',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/ueber',
                permanent: true,
            },
        ]
    },
}
