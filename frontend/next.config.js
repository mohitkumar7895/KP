/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // ✅ Ignore Supabase Realtime dynamic require warning
    config.ignoreWarnings = [
      { module: /@supabase\/realtime-js/ },
    ];
    return config;
  },
};

module.exports = nextConfig;
