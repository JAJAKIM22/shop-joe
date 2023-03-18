/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com', 'cdn6.f-cdn.com', 'images.unsplash.com', 'img.freepik.com', 'thumbs.dreamstime.com']
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
