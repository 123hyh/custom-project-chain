
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./base')
config.plugin('clean').use(CleanWebpackPlugin)
module.exports = config.toConfig()