/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' removed so /api/razorpay/* routes work for donations.
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
