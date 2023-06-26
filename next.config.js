/** @type {import('next').NextConfig} */
const nextConfig = {
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
