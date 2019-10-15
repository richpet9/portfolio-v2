const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'frontend/src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/frontend/public'),
    filename: 'bundle.js'
  }
};
