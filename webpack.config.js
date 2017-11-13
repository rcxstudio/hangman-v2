const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
       path: __dirname + '/build/',
       filename: 'app.bundle.js'
   },
  // output: {
  //   filename: 'public/app.bundle.js',
  //   publicPath: '/'
  //   // NOTE: look up docs on publicPath and path for further study
  // },
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
