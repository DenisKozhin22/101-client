/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	env: {
		BASE_URL: 'http://localhost:5000/api',
	},
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:5000/api/:path*`,
			},
		]
	},
}

module.exports = nextConfig
