const path = require('path');

module.exports = [
  {
  mode: 'production',
  entry: {
    'babel-runtime-corejs2': './babel-runtime-corejs2/input.js',
    'babel-runtime-corejs3': './babel-runtime-corejs3/input.js',
    'babel-runtime': './babel-runtime/input.js',
  },
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
},
{
  mode: 'none',
  entry: {
    'babel-runtime-corejs2': './babel-runtime-corejs2/input.js',
    'babel-runtime-corejs3': './babel-runtime-corejs3/input.js',
    'babel-runtime': './babel-runtime/input.js',
  },
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: '[name].dev.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
]