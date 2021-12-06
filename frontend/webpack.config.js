module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.tsx','.ts', '.js']
  }
}