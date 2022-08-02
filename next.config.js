/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  axios:{
    baseURL: process.env.API_URL
  }
}

module.exports = nextConfig
