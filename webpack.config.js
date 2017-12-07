const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './module/import.test.js',
    output: {
        filename: 'bundle.js'
    },
    // target: 'node',
    // node: {
    //     console: false,
    //     global: true,
    //     process: true,
    //     __filename: "mock",
    //     __dirname: "mock",
    //     Buffer: true,
    //     setImmediate: true

    //     // See "Other node core libraries" for additional options.
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env'],
                        babelrc: false,
                        plugins: [
                            'transform-es2015-template-literals',
                            'transform-es2015-literals',
                            'transform-es2015-function-name',
                            'transform-es2015-arrow-functions',
                            'transform-es2015-block-scoped-functions',
                            'transform-es2015-classes',
                            'transform-es2015-object-super',
                            'transform-es2015-shorthand-properties',
                            'transform-es2015-computed-properties',
                            'transform-es2015-for-of',
                            'transform-es2015-sticky-regex',
                            'transform-es2015-unicode-regex',
                            'check-es2015-constants',
                            'transform-es2015-spread',
                            'transform-es2015-parameters',
                            'transform-es2015-destructuring',
                            'transform-es2015-block-scoping',
                            'transform-es2015-typeof-symbol',
                            'transform-regenerator'
                        ],
                    }
                }
            }
        ]
    },
    plugins:[
        // new UglifyJsPlugin({
        // uglifyOptions:{

        // }})
        new webpack.optimize.UglifyJsPlugin()
]
};