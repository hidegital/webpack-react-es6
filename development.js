import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
                // test: /\.jsx$/,
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    devServer: {
        contentBase: 'dist',
        port: 3000
    },


    //3つ指定しないと拡張子が省略できない
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        })
    ]
}
