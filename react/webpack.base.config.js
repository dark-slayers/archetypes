var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    vendor: ["react", 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './target'),
    filename: "[name].[chunkhash:4].bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "vendor.[chunkhash:4].bundle.js"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      filename: "runtime.[chunkhash:4].bundle.js"
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
                "browsers": ["Chrome >= 60", "Firefox >= 55"]
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
const entrys={'search_express':'快递单查询', 'accept':'快递接收'};
const list = Object.keys(entrys);
for(let key of list){
  config.entry[key]="./src/entry/"+key+".entry.js",
  config.plugins.push(new HtmlWebpackPlugin({
      title: entrys[key],
      filename: key+'.html',
      template: './src/template.html',
      chunks: ['vendor','runtime',key]
    }));
}

module.exports = config;
