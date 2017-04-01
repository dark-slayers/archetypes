var webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    vendor: ["jquery", "react", 'react-dom'],
    "/packpage/debug": "./src/entry/debug.entry.js",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "/packpage/vendor.bundle.js"
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  }
}
module.exports = config;
