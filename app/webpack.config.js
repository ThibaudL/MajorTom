const path = require("path");

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path : path.join(__dirname, '/dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.html$/, loader: "html" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.css/, loader: "style-loader!css-loader" }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};