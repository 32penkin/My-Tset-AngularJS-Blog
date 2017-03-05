module.exports = {
  entry: './src/app/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname
  }
};
