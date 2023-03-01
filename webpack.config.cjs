const path = require('path');

module.exports = {
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            static: {
              directory: path.join(__dirname, 'dist'),
              filename: 'bundle.js',
            },
            compress: true,
            port: 3000,
        },
    };