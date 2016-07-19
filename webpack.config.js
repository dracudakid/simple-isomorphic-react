import webpack from 'webpack';
import path from 'path';

const config = {
  context: __dirname,
  // the entry point for your bundle
  entry: [
    // Add the client which connects to our middleware
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ],
    presets: ['es2015', 'react'],
  }
};

export default config;