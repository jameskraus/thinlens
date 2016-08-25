var path = require('path')
var webpack = require('webpack')

var babelQuery = {
        plugins: ['transform-object-rest-spread', 'transform-react-display-name'],
        presets: ['es2015', 'react']
}

module.exports = {
    debug: true,
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './client/index.js'
        ],
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/thinlens/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: babelQuery
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&sourceMap&localIdentName=[name]---[local]---[hash:base64:5]',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.(svg|png|jpg|ttf|eot|woff|woff2)/,
                loader: 'file-loader'
            }
        ]
    }
}