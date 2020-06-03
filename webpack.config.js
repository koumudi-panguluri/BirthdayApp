const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports ={
    entry: {
        main: './src/index.js'
    },
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 5000,
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins:['@babel/plugin-transform-runtime']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.html/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use:{
                    loader: 'file-loader?name=[name].[ext]'
                }
            },
            {
                test: '/\.json/',
                use:{
                    loader: 'json-loader?name=[name].[ext]'
                }
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inlineSource: 'runtime~.+\\.js',
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new DashboardPlugin(),
    ],
    optimization:{
        splitChunks:{
            chunks: 'all'
        },
        runtimeChunk: true
    }
}
