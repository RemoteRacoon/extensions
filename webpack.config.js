const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const username = 'litvi';
const destinationFolder = 'AnyChart';
const qext = 'any-ext.qext';
const outputFile = 'any-ext.js';
const outputPath = path.resolve(`C:\\Users\\${username}\\Qlik\\Sense\\Extensions\\${destinationFolder}`);

module.exports = {
  entry: path.resolve(__dirname, 'src/'),
  watch: false,
  output: {
    filename: outputFile,
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
      { from: path.resolve(__dirname, `src/${qext}`), to: outputPath }
    ])

  ]
};
