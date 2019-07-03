const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `lib${argv.mode === 'production' ? '.min' : ''}.js`,
        library: '',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            ],
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
        }],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
            }),
        ],
    },
});
