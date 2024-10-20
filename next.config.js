/** @type {import('next').NextConfig} */

// Check if the script is running in a GitHub Actions environment
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  // Extract the repository name from the GITHUB_REPOSITORY environment variable
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  
  // Set basePath and assetPrefix for GitHub Pages deployment
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig = {
  // Enable static HTML export
  output: "export",
  
  // Specify the directory for the exported files
  distDir: "dist",
  
  // Set base path and asset prefix, particularly useful for GitHub Pages deployment
  basePath: basePath === "/" ? "" : basePath,  // Fix: ensure basePath is not set to "/"
  assetPrefix: assetPrefix,

  images: {
    // Disable built-in image optimization (useful for static site exports)
    unoptimized: true,

    // Uncomment and customize the image loader if needed in the future
    // loader: "imgix",
    // path: "https://your-image-source.imgix.net",

    // Define remote patterns for loading images from external sources
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
