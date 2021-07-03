var path = require('path');

module.exports = {
    entry: './frontend/hotelbnb.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'asset', 'javascript'),
        filename: 'bundle.js',

    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};

