import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/economie/tourisme/musee',
        destination: '/tourisme/musee',
        permanent: true,
      },
    ];
  },
  images: {
    // Tailles dérivées plus larges pour les fonds pleine largeur (écrans retina).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    // Valeurs utilisées par next/image `quality={…}` doivent être listées (Next 13+).
    qualities: [75, 85, 92],
  },
};

export default nextConfig;
