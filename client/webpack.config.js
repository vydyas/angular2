var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: "./app/main.ts",
    output: {
        path: "./assets/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            '', '.js', '.ts'
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};