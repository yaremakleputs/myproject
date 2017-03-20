var path = require('path');
//var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: "./app/js/script.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  //target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devServer: {
    //hot: true
  },

  module: {
  {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader?resolve url'
  }, {
    test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
    loader: 'file?name=[path][name].[ext]?[hash]'
  }]

},
};