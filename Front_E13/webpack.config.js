const path = require('path');


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        contentBase: './dist',
      },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
}