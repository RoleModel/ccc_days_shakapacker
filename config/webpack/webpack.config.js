const { webpackConfig, merge } = require('shakapacker')
const customConfig = {
  resolve: {
    extensions: ['.scss', '.css']
  }
}

module.exports = merge(webpackConfig, customConfig)

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
