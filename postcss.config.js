/*
 * @Author: zhilidali
 * @Description: PostCSS is a tool for transforming styles with JS plugins.
 */

module.exports = {
  plugins: [
    require('stylelint'),
    require('precss'),
    require('postcss-preset-env')({ stage: 0, features: {} }),
  ],
};
