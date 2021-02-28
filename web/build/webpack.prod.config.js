const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');
const rootPath = process.cwd();

module.exports = merge(baseConfig, {
  mode: 'production',
})