var path = require('path')

var express = require('express')
var app = express()

var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var compiler = webpack(webpackConfig)


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler, {
    reload: true
}))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(7770, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7770')
})