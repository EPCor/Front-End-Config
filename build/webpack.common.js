const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolveCWD = (cwd => name => path.resolve(cwd, name))(process.cwd());

module.exports = {
  output: {
    filename: '[name].[hash:4].js',
    path: resolveCWD('dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: [resolveCWD('src')],
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       outputPath: 'images/',
        //       limit: 10 * 1024,
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[hash:5].[ext]',
        //       limit: 5000,
        //       outputPath: 'fonts/',
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      NAME: 'APP',
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    symlinks: false,
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.vue'],
  },
  externals: {},
};
