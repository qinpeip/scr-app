const path = require('path');
const rootPath = process.cwd();
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: path.resolve(rootPath, './web/src/main.js'),
  output: {
    path: path.resolve(rootPath, './web/dist'),
    filename: 'js/[name].[fullhash].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
        options: {
        }
      },
      {
        test: /\.(less|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', {
          loader: 'style-resources-loader',
          options: {
            patterns: path.resolve(rootPath, './web/src/static/css/variables/*.less'),
            injector: 'append'
          }
        }]
      },
      {
        test: /\.(gif|jpeg|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // vue template 编译img标签后使用的是commonJs的引入方式， requre('*.img');与url-loader的引入方式冲突，所以关闭，esModule选项
              esModule: false,
              name: 'img/[fullhash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, './web/public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootPath, './web/src')
    }
  } 
}