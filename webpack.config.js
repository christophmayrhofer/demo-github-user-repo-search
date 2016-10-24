const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'],
      },
    ],
  },
};
