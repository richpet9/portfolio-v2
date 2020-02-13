const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'frontend/src/entries/main.js'),
        blog: path.join(__dirname, 'frontend/src/entries/blog.js')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/frontend/public'),
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
