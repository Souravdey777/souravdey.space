/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_ANALYTICS: "G-BJ96LSKFFB",
  },
  images: { domains: ["cdn.hashnode.com"] },
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
