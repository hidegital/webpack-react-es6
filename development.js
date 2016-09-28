import path from 'path'
import webpack from 'webpack'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
//ExtractTextPluginを使うことによりhtmlにcssが読まれる
import autoprefixer from 'autoprefixer';
// import precss from 'precss';
// import rapture from 'rapture';
// var stylus_plugin = require('rapture');


const src  = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

export default {
    // entry: {
    //     下の output.filename で使用されている[name]には、"app" がセットされます。
    //     app: "./src/js/entry.js"
    // },
    // context: src,
    devtool: 'source-map',

    entry: src + '/js/index.jsx',

    output: {
        path: dist,
        filename: 'js/bundle.js',
        // publicPath は webpack-dev-server で自動コンパイルするために必要（URLにおけるJSファイルへのパスを書く）
        // publicPath: 'http://localhost:3000/'
        publicPath: '/'
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
                // loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!postcss-loader!stylus-loader')
                //ExtractTextPluginを使ってcssを1つにする。FOUCによるチラツキを防ぐ
                //resolve-url-loaderを使うことによりimport先のpathも
                loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!postcss-loader!resolve-url!stylus-loader')
                // loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap!postcss-loader!stylus-loader')
                //?sourceMap sourceMap用 devtoolと一緒に使わないと効かない
            },


            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // url-loaderを使用するとdatauriに画像を変換 重さによって切り替える
                // jpegとかどうなる？？
                // loader: 'url-loader?limit=10000&name=img/[name].[ext]'
                loader: 'url-loader'
                // file-loaderは画像のまま扱う
                // loader: 'file?name=img/[name].[ext]'

                //下記はlodaersでないとだめ
                // loaders: [
                //     'file?name=img/[name].[ext]',
                //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                // ]

            }
            // { test: /\.css$/,loader: 'style-loader','css-loader!postcss-loader'}
        ]
    },

    //todo use rupture
    // stylus: {
    //     use: [
    //         require('rupture')(),
    //     ],
    //     import: ['~rupture/rupture/index.styl']
    // },

    //autoprefixerはpostcssのを使う
    postcss: [ autoprefixer( { browsers: ['IE 9', 'IE 10', 'IE 11', 'last 2 versions'] } )],

    devServer: {
        contentBase: 'dist',
        port: 3000
    },

    resolve: {
        extensions: ['', '.js', '.jsx', 'stylus'],
        alias: {
            images: path.join(__dirname, 'dist/img')
        }
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     template: src + '/index.html',
        //     filename: 'index.html'
        // }),
        new ExtractTextPlugin("./css/app.css"),
        //./cssでcssディレクトリにビルド

        //下記2つでbuild時のreactのエラーを回避
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        })
    ]
}




