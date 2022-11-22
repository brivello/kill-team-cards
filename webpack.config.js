const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: './src/render.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  target: 'node',
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
