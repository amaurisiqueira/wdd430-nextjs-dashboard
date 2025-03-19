import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  }
  ,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  }
};

export default nextConfig;
