/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh', 
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    // '@snowpack/web-test-runner-plugin',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    "bundle": true,
    "minify": true,
    "target": 'latest',
  },
  packageOptions: {
    knownEntrypoints: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion',
    ],
  },
  devOptions: {
    /* ... */
    open: 'none',
  },
  buildOptions: {
    /* ... */
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
  },
  alias: {
    '.tsx': '.jsx',
    '.ts': '.js',
  },
};
