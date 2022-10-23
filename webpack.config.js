const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ],
      },
      {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
         generator: {
            filename: 'img/[name][ext]'
         }
     }]
   },
      plugins: [
         new miniCss({
            filename: 'style.css',
         }),
         new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            inject:'body'
         }),
         new CopyPlugin({
            patterns: [
              { from: "src/assets/img", to: "img" },
            //   { from: "other", to: "public" },
            ],
          }),
      ],
      devServer: {
         static: {
           directory: path.join(__dirname, 'dist'),
         },
         compress: true,
         port: 1150,
       },
};