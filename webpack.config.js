const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  watch: true,
  mode: 'development', // Could be 'production' for optimized build
};