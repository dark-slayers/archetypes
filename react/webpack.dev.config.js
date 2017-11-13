var webpack = require("webpack");
var path = require('path');
var config = require('./webpack.base.config.js');
config.entry["/target/test"]="./src/entry/test.entry.js";
module.exports = config;
