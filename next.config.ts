import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/economie/tourisme/musee',
        destination: '/tourisme/musee',
        permanent: true,
      },
      {
        source: '/economie/tourisme',
        destination: '/tourisme/introductionenjeux',
        permanent: true,
      },
      {
        source: '/developpement/tourisme',
        destination: '/tourisme/introductionenjeux',
        permanent: true,
      },
      {
        source: '/tourisme',
        destination: '/tourisme/introductionenjeux',
        permanent: true,
      },
      {
        source: '/economie/tourisme/:path*',
        destination: '/developpement/tourisme/:path*',
        permanent: true,
      },
      {
        source: '/communaute/contacts',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/communaute/echos',
        destination: '/echos',
        permanent: true,
      },
      {
        source: '/communaute/echos/:path*',
        destination: '/echos/:path*',
        permanent: true,
      },
      {
        source: '/developpement/tourisme/restaurant',
        destination: '/tourisme/restaurant',
        permanent: true,
      },
      {
        source: '/economie/tourisme/restaurant',
        destination: '/tourisme/restaurant',
        permanent: true,
      },
      {
        source: '/developpement/tourisme/sites',
        destination: '/tourisme/sites',
        permanent: true,
      },
      {
        source: '/economie/tourisme/sites',
        destination: '/tourisme/sites',
        permanent: true,
      },
      {
        source: '/developpement/tourisme/organisation',
        destination: '/tourisme/organisation',
        permanent: true,
      },
      {
        source: '/economie/tourisme/organisation',
        destination: '/tourisme/organisation',
        permanent: true,
      },
      {
        source: '/developpement/tourisme/visitez-bapa',
        destination: '/tourisme/visitez-bapa',
        permanent: true,
      },
      {
        source: '/economie/tourisme/visitez-bapa',
        destination: '/tourisme/visitez-bapa',
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
