const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  // NOTE: you can have multiple entry points
  output: {
       path: __dirname + '/public/builds/',
       filename: 'app.bundle.js',
   },
  // NOTE: you can use [name].bundle.js with multiple entry points
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          include: /app/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env']
            }
          }
        }
      ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "eval-source-map"
};
