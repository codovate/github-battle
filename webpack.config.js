var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //1)takes all your code (this include import & include files )
  entry: "./app/index.js",

  //3)bundles all your files into onle and output in a directory with a specific name.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/" //all our asset will be in /
  },

  //2) run some transformations on your taken codes
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  mode: "development"
};
