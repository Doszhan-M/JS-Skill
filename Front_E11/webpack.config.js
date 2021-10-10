module.exports = {
    entry: {
        'index': './src/1.js',
        '1': './src/1.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}