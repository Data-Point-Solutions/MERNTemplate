/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  routes: [
    // SPA Fallback in development
  ],
  optimize: {
    // Bundle your final build if needed
  },
  packageOptions: {
    external: ['@testing-library/jest-dom'], // Add this line
    knownEntrypoints: ['@testing-library/jest-dom/extend-expect']
  },
  devOptions: {
    // Add any additional dev options if necessary
  },
  buildOptions: {
    // Add any additional build options if necessary
  },
};
