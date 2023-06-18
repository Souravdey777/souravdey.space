/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_ANALYTICS: "G-BJ96LSKFFB",
  },
  experimental: {
    mdxRs: true,
    appDir: true,
  },
};

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX(nextConfig);
