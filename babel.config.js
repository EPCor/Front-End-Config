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
  ],
  plugins: [
    // ||=, &&= , ??=
    ['@babel/plugin-proposal-logical-assignment-operators'],
    // export * as ns from "mod"
    ['@babel/plugin-proposal-export-namespace-from'],
    // a ?? b
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    // a?.b
    ['@babel/plugin-proposal-optional-chaining'],
    // decorators
    // ['@babel/plugin-proposal-decorators'],
    // class {#a () {}}
    ['@babel/plugin-proposal-private-methods'],
    // class {a; #a; static a; static #a;}
    ['@babel/plugin-proposal-class-properties'],
    // import()
    ['@babel/plugin-syntax-dynamic-import'],
    // re-use helpers
    ['@babel/plugin-transform-runtime'],
  ],
};

module.exports = options;
