const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
    }),
];

module.exports = merge(common, {
    mode: "development",
    target: "web",
    plugins,
    devtool: "inline-source-map",
    output: {
        filename: "[name].[hash].js",
    },
});