/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'ftvzmjhulohohammuanz.supabase.co',
                port: '',
            }
        ]
    }
};

export default nextConfig;
