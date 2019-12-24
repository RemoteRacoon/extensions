const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const username = 'litvi';

const outputPath = path.resolve(`C:\\Users\\${username}\\Qlik\\Sense\\Extensions\\MySecondExtension`);

module.exports = {
  entry: path.resolve(__dirname, 'src/'),
  watch: true,
  mode: 'development',
  output: {
    filename: 'extension.js',
    path: outputPath,
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/extension.qext'), to: outputPath }
    ])

  ]
};
