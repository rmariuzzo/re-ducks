const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  },
}
