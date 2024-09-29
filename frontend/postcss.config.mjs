/** @type {import('postcss').Config} */
export default {
    plugins: {
      autoprefixer: {},
      'postcss-apply': {},
      'postcss-custom-media': {
            customMedia: {
                mobile: '(max-width: 480px)',
                tablet: '(min-width: 481px) and (max-width: 1023px)',
                desktop: '(min-width: 1024px) and (max-width: 1279px)',
                wide: '(min-width: 1280px)',
            },
        },
      },
      'postcss-flexbugs-fixes': {},
      'postcss-import': {},
      'postcss-lit': {},
      'postcss-nested': {},
      'postcss-preset-env': {
        browsers: 'last 2 versions',
        stage: 1,
        features: {
          'custom-properties': false,
        },
      },
      cssnano: {
        preset: 'default',
      },
    };  
  