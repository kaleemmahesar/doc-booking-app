import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntel = createNextIntlPlugin()

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['localhost'],
    },
}

export default withNextIntel(nextConfig)