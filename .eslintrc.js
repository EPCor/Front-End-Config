/** @type { import('eslint').Linter.Config } */
const options = {
  root: true,
  /** @package @babel/eslint-parser */
  parser: '@babel/eslint-parser',
  parserOptions: {},

  /* environment defines global variables that are predefined */
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  /** global ariables */
  globals: {
    Atomics: false,
    SharedArrayBuffer: false,
    App: true,
  },

  /* third-party plugins */
  plugins: [],
  /* Plugins may provide processors */
  processor: '',
  overrides: [],

  /* Adding Shared Settings */
  settings: {},
  /* Extending Configuration */
  extends: ['@epcor/eslint-config'],
  rules: {},
};

module.exports = options;
