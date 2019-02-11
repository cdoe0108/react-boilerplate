const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, "..")
const srcDir = path.resolve(__dirname, "..", "src")
const distDir = path.resolve(__dirname, "..", "dist")
const {NODE_ENV = "development"} = process.env

module.exports = {
    // where to find the source code
    context: rootDir, 
    devtool: "cheap-module-source-map",
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{loader: 'babel-loader'}],
                include: srcDir
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { modules: true, sourceMap: false, localIdentName: "[name]-[local]_[hash:base64:5]",} },
                    { loader: 'sass-loader' },
                    {  loader: 'postcss-loader' , options: {
                        plugins: () => [
                            require('autoprefixer')({
                                browsers: [
                                    ">1%",
                                    "last 4 versions",
                                    "Firefox ESR",
                                    "not ie < 9"
                                ],
                                flexbox: "no-2009"
                            })
                        ]
                    }}
                ]
            }
        ]
        },
        resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
    // The destination file name concatenated with hash (generated whenever you change your code).
    // The hash is really useful to let the browser knows when it should get a new bundle
    // or use the one in cache

      path: distDir,
      publicPath: '/',
      filename: '[name].[hash:8].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebPackPlugin({
            // where to find the html template
            template: path.join(rootDir, "index.html"),
            // where to put the generated file
            path: distDir,
            // the output file name
            filename: "index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
            NODE_ENV: NODE_ENV,
            __DEV__: NODE_ENV === "development",
            __PROD__: NODE_ENV === "production",
        }),
    ],
    devServer: {
      contentBase: rootDir,
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      port: 3000,
      open: true
    }
  };