var path = require('path');
var webpack = require('webpack');
var config = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist/",
        filename: "build.js"
    },
    module: {
        rules: [{
                test: / \.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'  // vue2的vue.js 配置到vue/dist下
        }
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    }
}

module.exports = config;