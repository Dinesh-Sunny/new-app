import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Opt-in caching via `use cache`; prerenders a static shell and streams dynamic parts (PPR).
  cacheComponents: true,
  // One reusable App Shell prefetch per route instead of one per visible link. Needs cacheComponents.
  partialPrefetching: true,
  // `<Link href>` and router pushes are type-checked against the real route tree.
  typedRoutes: true,
  poweredByHeader: false,
  experimental: {
    // Native Rust React Compiler inside Turbopack; faster than the Babel plugin.
    turbopackRustReactCompiler: true,
    // Hugeicons is a barrel of thousands of icons and isn't on Next's default optimized list.
    optimizePackageImports: ["@hugeicons/core-free-icons"],
  },
};

export default nextConfig;
