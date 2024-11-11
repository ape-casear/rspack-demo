const { VueLoaderPlugin } = require('vue-loader')
/**@type {import('webpack-dev-server').WebpackConfiguration} */
const data = {
    devtool: false,
    mode: 'production',
    entry: './src/index.js',
    optimization: {
        splitChunks: {
            minSize: 0,
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: 'vue-html-loader',
            },
            {
                test: /\.js$/,
                loader: 'builtin:swc-loader',
                exclude: /node_modules/,
                options: {
                    module: {
                        type: 'commonjs',
                    },
                    env: {
                        targets: {
                            chrome: 104,
                        },
                    },
                },
                type: 'javascript/auto',
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
}

module.exports = data
