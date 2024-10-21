/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Use 'export' to enable static export
  basePath: '/divi-portfolio', // Set the base path if you are serving from a subdirectory
  assetPrefix: '/divi-portfolio/', // Needed for loading assets correctly
};

module.exports = nextConfig;
