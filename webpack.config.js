const path = require('path');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'frontend/src/index.js'),
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
        path: path.join(__dirname, 'frontend/public'),
        filename: 'bundle.js'
    },
    plugins: [new ErrorOverlayPlugin()],
    devtool: 'cheap-module-source-map'
};
