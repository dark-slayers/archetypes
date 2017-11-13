var webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    vendor: ["jquery", "react", 'react-dom'],
    //"/target/a": "./src/entry/a.entry.js",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "/target/vendor.bundle.js"
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              modules: false,
              "targets": {
                "browsers": ["Chrome >= 60"]
              }
            }],
            ['stage-0'],
            ['react']
          ],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }]
    }]
  }
}
module.exports = config;
