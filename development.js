import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
//ExtractTextPluginを使うことによりhtmlにcssが読まれる
import autoprefixer from 'autoprefixer';
// import precss from 'precss';
// import rapture from 'rapture';
// var stylus_plugin = require('rapture');


const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

export default {
    entry: src + '/index.jsx',

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.styl$/,
                //style-loaderはHTMLのheaderに追加する役割
                loader: ExtractTextPlugin.extract('style-loader!css-loader?sourceMap!postcss-loader!stylus-loader')
                // loader: 'style-loader!css-loader?sourceMap!postcss-loader!stylus-loader'
            }

            // { test: /\.css$/,loader: 'style-loader','css-loader!postcss-loader'}
        ]
    },

    // stylus: {
    //     use: [
    //         require('rupture')(),
    //     ],
    //     import: ['~rupture/rupture/index.styl']
    // },

    // stylus: {
    //     use: [stylus_plugin()]
    // },

    // postcss: [ autoprefixer( { browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] } ), precss],

    postcss: [ autoprefixer( { browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] } )],

    // postcss() {
    //     return [autoprefixer({browsers: ['last 2 versions']}), precss];
    // },

    devServer: {
        contentBase: 'dist',
        port: 3000
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'stylus']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin("app.css")
    ]

}





