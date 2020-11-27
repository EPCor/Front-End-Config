const webpack = require('webpack');
const config = require('../config/config.js');

module.exports = {
  cache: {
    type: 'filesystem',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: config.port,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    /* development default configuration */
    // new webpack.NamedModulesPlugin(),
    // new webpack.NamedChunksPlugin(),
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    // HotModuleReplacementPlugin
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {},
};
