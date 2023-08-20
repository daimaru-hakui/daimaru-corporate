module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    // experimental: {
    //   optimizeFonts: true,
    // },
    trailingSlash: true,
  };
  return nextConfig;
};
