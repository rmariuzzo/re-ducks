const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = {
  entry: {
    're-ducks': './lib/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
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

const devConfig = merge(baseConfig, {
  output: { filename: '[name].js' },
  devtool: 'cheap-module-source-map',
})

const prodConfig = merge(baseConfig, {
  output: { filename: '[name].min.js' },
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
})

module.exports = [devConfig, prodConfig]
