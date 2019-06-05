const path = require('path');

module.exports = {
  entry: './src/main.bs.js',
  context: path.resolve(__dirname),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'window'
  },
  mode: 'production',
  optimization: {
    minimize: false
  }
};
