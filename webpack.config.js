const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/javascript/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },

    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            title: "Form Validation",
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],

    devtool: "source-map",

    devServer: {
        static: "./dist",
        liveReload: true,
        hot: false,
    },

    optimization: {
        runtimeChunk: "single",
    },

    module: {
        rules: [{ test: /\.css/i, use: ["style-loader", "css-loader"] }],
    },
}
