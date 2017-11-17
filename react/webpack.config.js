var webpack = require("webpack");
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var config = require('./webpack.base.config.js');
config.module.rules[0].use[0].options.plugins.push('transform-remove-console');
config.plugins.push(new UglifyJSPlugin({
  uglifyOptions: {
    ie8: false,
    output: {
      comments: false,
      beautify: false,
    },
    mangle: {
      keep_fnames: true
    },
    compress: {
      warnings: false,
      drop_console: true
    },
  }
}));
module.exports = config;
