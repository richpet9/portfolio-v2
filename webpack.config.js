const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'frontend/src/entries/main.js'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/frontend/public'),
        filename: '[name].bundle.js',
    },
};
