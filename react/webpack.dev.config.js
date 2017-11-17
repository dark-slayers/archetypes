var webpack = require("webpack");
var path = require('path');
var config = require('./webpack.base.config.js');
config.entry["test"]="./src/entry/test.entry.js";
module.exports = config;
