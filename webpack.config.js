var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    plugins: [
        new LiveReloadPlugin(options)
    ],
    rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
    ]
}