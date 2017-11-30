const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
                        presets: ['env'],
                        plugins: []
                    }
                }
            }
        ]
    },
    // plugins:[new BundleAnalyzerPlugin(),]
};