const findWebpack = require('find-webpack')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const webpackOptions = findWebpack.getWebpackOptions()

  if (!webpackOptions) {
    throw new error('Could not find webpack')
  }

  const cleanOptions = {
    reactScripts: true,
  }

  findWebpack.cleanForCypress(cleanOptions, webpackOptions)

  const options = {
    webpackOptions,
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
}


