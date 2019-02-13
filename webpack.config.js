const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  watch: true,
  mode: 'development',
  entry: path.resolve(__dirname, './client/src/'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
