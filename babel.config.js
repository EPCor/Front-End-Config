/** @type { import('@babel/core').TransformOptions } */
const options = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
        exclude: ['@babel/plugin-transform-regenerator'],
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: [
    // decorators
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // re-use helpers
    ['@babel/plugin-transform-runtime'],
  ],
};

module.exports = options;
