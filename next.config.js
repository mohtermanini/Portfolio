/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "/";
let assetPrefix = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig = {
  output: "export",
  distDir: "dist",
  // basePath: basePath,
  // assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
    // loader: "imgix",
    // path: "https://mohamadtermanini-121374497.imgix.net",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
    ],
  },
};

module.exports = nextConfig;
