/**
 * @Author: zhilidali
 * @Description: modern style linter
 */

/** @type { import('stylelint').Configuration } */
const options = {
  defaultSeverity: 'warning',
  ignoreFiles: [],
  processors: [],
  plugins: [],
  extends: [
    /**
     * @package stylelint-config-recommended
     * @description The recommended config turns on just the possible error rules
     * @see {@link https://stylelint.io/#extend-a-shared-configuration}
     */
    'stylelint-config-recommended',

    /**
     * @integration prettier
     * @package stylelint-config-prettier
     * @description stylelint-config-prettier is a config that disables rules that conflict with Prettier.
     * @package stylelint-prettier
     * @description stylelint-prettier is a plugin that adds a rule that formats content using Prettier.
     * @recommended stylelint-prettier exposes a "recommended" configuration that configures both stylelint-prettier and stylelint-config-prettier in a single step
     * @see {@link https://prettier.io/docs/en/integrating-with-linters.html#stylelint}
     */
    'stylelint-prettier/recommended',
  ],
  rules: {
    /**
     * Possible errors
     * @see {@link https://stylelint.io/user-guide/rules#possible-errors}
     * turn on by @package {stylelint-config-recommended}
     */

    /**
     * Limit language features
     * @see {@link https://stylelint.io/user-guide/rules#limit-language-features}
     */
    // @link https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    'shorthand-property-no-redundant-values': true,
    // @link https://stylelint.io/user-guide/rules/declaration-no-important
    'declaration-no-important': true,
    // @link https://stylelint.io/user-guide/rules/selector-max-empty-lines
    'selector-max-empty-lines': 0,

    /**
     * Stylistic issues
     * @see {@link https://stylelint.io/user-guide/rules#stylistic-issues}
     * turn on by @package {stylelint-prettier/recommended}
     */
  },
};

module.exports = options;
