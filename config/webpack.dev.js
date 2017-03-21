const webpack = require('webpack');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const root = path.join.bind(path, ROOT);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = env => {
    return {
        context: __dirname,
        entry: {
            'main': './../src/index.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[id].chunk.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [root('src'), root('node_modules')],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: 'tsconfig.webpack.json'
                            }
                        }
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader', 'postcss-loader'],
                    exclude: [root('src')]
                },
                {
                    test: /\.scss$/,
                    use: ['to-string-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
                    exclude: [root('src')]
                },
                {
                    test: /\.(woff2?|ttf|eot|svg)$/,
                    loader: 'url-loader?limit=10000'
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [root('src/index.html')]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                configFile: 'tslint.json'
                            }
                        }
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    include: [root('src', 'styles')]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    include: [root('src', 'styles')]
                }
            ],
        },
        plugins: [
            new AssetsPlugin({
                path: root('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
            new CheckerPlugin(),

            new CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks: Infinity
            }),
            new CopyWebpackPlugin([
                {from: './../src/assets', to: 'assets'}
            ]),
            new HtmlWebpackPlugin({
                template: './../src/index.html',
                title: 'Blueprint',
                chunksSortMode: 'dependency'
            }),
            new LoaderOptionsPlugin({
                debug: true,
                options: {}
            })
        ],
        performance: {hints: false},
        devServer: {
            proxy: {
                '/api/**': {
                    target: 'http://localhost:8081',
                    secure: false
                }
            },
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }

        },
        devtool: 'cheap-module-source-map',
    }
};
