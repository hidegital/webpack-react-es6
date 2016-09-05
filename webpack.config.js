// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     context: __dirname + '/src',
//     entry: {
//         javascript: './main.js'
//     },
//     output: {
//         path: __dirname + '/dist',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: 'dist',
//         port: 3000
//     },
//     module: {
//         loaders: [
//             {
//                 test: /.jsx?$/,
//                 loader: 'babel-loader',
//                 exclude: /node_modules/,
//                 query: {
//                     presets: ['es2015', 'react', 'react-hmre']
//                 }
//             }
//         ]
//     }
// };
//
//

//
// var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
//
// const PATHS = {
//     app:   path.join(__dirname, 'app'),
//     build: path.join(__dirname, 'build')
// };
//
// module.exports = {
//     // ビルドに含めるファイルを格納するディレクトリ
//     entry: PATHS.app,
//
//     // ビルドしたファイルを格納するディレクトリと、ファイル名
//     output: {
//         path: PATHS.build,
//         filename: 'build.js'
//     },
//
//     plugins: [
//         // 生成するHTMLの設定
//         new HtmlwebpackPlugin({
//             title: 'Kanban'
//         })
//     ]
// };

//
// var webpack = require('webpack');
// var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
// var merge = require('webpack-merge');
//
// const TARGET = process.env.npm_lifecycle_event;
//
// const PATHS = {
//     app:   path.join(__dirname, 'app'),
//     build: path.join(__dirname, 'build')
// };
//
// // 共通設定
// const common = {
//     entry: PATHS.app,
//
//     resolve: {
//         // import/requireをするときに拡張子を省略できるようにする
//         extensions: ['', '.js', '.jsx']
//     },
//
//     output: {
//         path: PATHS.build,
//         filename: 'build.js'
//     },
//
//     module: {
//         loaders: [
//             // Babelローダー
//             test: /\.jsx?$/,
//             loaders: ['babel'],
//             include: PATHS.app
//         ]
//     },
//
//     plugins: [
//         new HtmlwebpackPlugin({
//             title: 'Kanban'
//         })
//     ]
// };
//
// // npm startを実行した時の設定
// if(TARGET === 'start' || !TARGET) {
//     module.exports = merge(common, {
//         devtool: 'eval-source-map',
//         devServer: {
//             historyApiFallback: true,
//             hot: true,
//             inline: true,
//             progress: true,
//             stats: 'errors-only',
//             host: process.env.HOST,
//             port: process.env.PORT
//         },
//
//         plugins: [
//             new webpack.HotModuleReplacementPlugin()
//         ]
//
//     });
// }
//
// // npm buildを実行した時の設定
// if(TARGET === 'build') {
//     module.exports = merge(common, {
//     });
// }

// var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
// var merge = require('webpack-merge');
//
// const TARGET = process.env.npm_lifecycle_event;
//
// const PATHS = {
//     app:   path.join(__dirname, 'app'),
//     build: path.join(__dirname, 'build')
// };
//
// // 共通設定
// const common = {
//     entry: PATHS.app,
//
//     resolve: {
//         // import/requireをするときに拡張子を省略できるようにする
//         extensions: ['', '.js', '.jsx']
//     },
//
//     output: {
//         path: PATHS.build,
//         filename: 'build.js'
//     },
//
//     module: {
//         loaders: [
//             // Babelローダー
//             test: /\.jsx?$/,
//     loaders: ['babel'],
//     include: PATHS.app
// ]
// },
//
//     plugins: [
//         new HtmlwebpackPlugin({
//             title: 'Kanban'
//         })
//     ]
//
// };
//
// // npm startを実行した時の設定
// if(TARGET === 'start' || !TARGET) {
//     module.exports = merge(common, {
//         devServer: {
//             historyApiFallback: true,
//             hot: true,
//             inline: true,
//             progress: true,
//             stats: 'errors-only',
//             host: process.env.HOST,
//             port: process.env.PORT
//         },
//
//         plugins: [
//             new webpack.HotModuleReplacementPlugin()
//         ]
//     });
// }
//
// // npm buildを実行した時の設定
// if(TARGET === 'build') {
//     module.exports = merge(common, {
//     });
// }


require('babel-core/register'); // development.jsでES6を使えるようにする
module.exports = require('./development');
