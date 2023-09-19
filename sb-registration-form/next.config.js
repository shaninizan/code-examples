/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/registration",
        destination: "https://httpstat.us/random/201,500",
      },
    ];
  },
}

module.exports = nextConfig