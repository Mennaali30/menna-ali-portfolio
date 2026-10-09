import type { NextConfig } from "next";

const isGithubPages = process.env.BUILD_TARGET === "github-pages";

const nextConfig: NextConfig = {
  // Static export and repository subpath active only for GitHub Pages
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/menna-ali-portfolio",
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {
        // PPR and component caching are preserved for Vercel and local development
        cacheComponents: true,
        partialPrefetching: true,
      }),

  // Turbopack CSS loader for Tailwind CSS v4 is preserved across all builds
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
