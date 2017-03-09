const path = require('path')

module.exports = {
  entry: './src/server.js',
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
