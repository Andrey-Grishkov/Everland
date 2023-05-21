const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: "buttons.html",
      template: './src/buttons.html'
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: /media="\(device-width:\s\d+px\)\sand\s\(device-height:\s\d+px\)\sand\s\(-webkit-device-pixel-ratio:\s\d\)\sand\s\(orientation:\s\w+\)"/g,
        replacement: ''
      }
    ]),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')},
        {from: path.resolve(__dirname, 'src/icons'), to: path.resolve(__dirname, 'dist/images')}
      ]
    }),
    new FaviconsWebpackPlugin('./src/icons/favicon.svg')
  ]
}