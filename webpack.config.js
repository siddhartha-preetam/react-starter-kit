const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + "/src/app",
    entry: {
        javascript: "./index.js"
    },
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}