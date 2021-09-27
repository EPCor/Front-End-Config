/** @type { import('eslint').Linter.Config } */
const options = {
  root: true,
  /**
   * @integration typescript
   * @package @typescript-eslint/parser
   */
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  /* environment defines global variables that are predefined */
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  /* global variables */
  globals: {
    Atomics: false,
    SharedArrayBuffer: false,
    App: true,
  },

  /* third-party plugins */
  plugins: ['@typescript-eslint'],
  /* Plugins may provide processors */
  processor: '',
  overrides: [
    {
      files: ['**/*.md'],
      rules: {
        'no-undef': ['off'],
        'no-unused-vars': ['off'],
        'no-console': ['off'],
      },
    },
  ],

  /* Adding Shared Settings */
  settings: {},
  /* Extending Configuration */
  extends: [
    /**
     * enables a subset of core rules that report common problems
     * @see {@link https://eslint.org/docs/user-guide/configuring#using-eslintrecommended}
     */
    'eslint:recommended',

    /**
     * @integration typescript
     * @package @typescript-eslint/eslint-plugin
     * @see {@link https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin}
     */
    'plugin:@typescript-eslint/recommended',

    /**
     * @integration prettier
     * @package eslint-config-prettier
     * @description eslint-config-prettier is a config that disables rules that conflict with Prettie.
     * @package eslint-plugin-prettier
     * @description eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier.
     * @recommended eslint-plugin-prettier exposes a "recommended" configuration that configures both eslint-plugin-prettier and eslint-config-prettier in a single step.
     */
    'plugin:prettier/recommended',
  ],
  rules: {
    /**
     * Possible Errors
     */
    // Disallow the use of console
    // "no-console": ["warn", { "allow": ["warn", "error", "log", "info"] }],
    // "debugger": "warn",
    // calling `Object.prototype` method directly on objects
    'no-prototype-builtins': ['off'],
    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': ['warn'],

    /**
     * Best Practices
     */
    // Require default cases in switch statements
    'default-case': ['warn'],
    // Enforce dot notation whenever possible
    'dot-notation': ['warn'],
    // Require the use of === and !==
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    // Disallow the use of alert, confirm, and prompt
    'no-alert': ['warn'],
    // Disallow the use of arguments.caller or arguments.callee
    'no-caller': ['warn'],
    // require or disallow strict mode directives
    // "strict"

    /**
     * Variables
     */
    // Disallow initializing variables to undefined
    'no-undef-init': ['warn'],
    // Disallow unused variables
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
      },
    ],

    /**
     * CommonJS
     */
    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': ['warn'],

    /**
     * Stylistic
     */
    // Enforce consistent spacing after the // or \/* in a comment
    'spaced-comment': ['warn'],

    /**
     * ES6
     */
    // Require braces in arrow function body = as-needed
    'arrow-body-style': ['warn'],
    // Disallow duplicate imports = { includeExports: false }
    'no-duplicate-imports': ['warn'],
    // Disallow unnecessary computed property keys on objects
    'no-useless-computed-key': ['warn'],
    // Require Objarrow-spacingect Literal Shorthand Syntax
    'object-shorthand': ['warn', 'properties'],
    // Suggest using const
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
    // Require template literals instead of string concatenation
    'prefer-template': ['warn'],

    'prettier/prettier': ['warn'],
  },
};

module.exports = options;
