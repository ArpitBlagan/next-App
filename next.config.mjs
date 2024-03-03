/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unpkg.com',
            port: '',
            pathname: 'pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/**',
          },
        ],
      },
};

export default nextConfig;
