/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};
