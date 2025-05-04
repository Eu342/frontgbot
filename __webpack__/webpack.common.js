const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

const ROOT_DIR = path.resolve(__dirname, "..", 'src');
const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const STATIC_DIR = path.resolve(__dirname, "..", "static");

const plugins = [
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: [BUILD_DIR],
            },
            onEnd: {
                copy: [
                    {
                        source: STATIC_DIR,
                        destination: BUILD_DIR,
                    },
                ],
            },
        },
    }),
    new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, "index.html"),
        filename: "index.html",
        favicon: path.resolve(PUBLIC_DIR, 'favicon.png')
    }),
    new webpack.HotModuleReplacementPlugin(),
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
    historyApiFallback: true,
    open: false,
    compress: true,
    allowedHosts: "all",
    hot: true,
    client: {
        overlay: false,
        progress: true,
    },

    port: 3000,
    devMiddleware: {
        writeToDisk: true,
    },
    static: [
        {
            directory: path.join(BUILD_DIR, "favicons"),
        },
    ],
};

module.exports = {
    devServer,
    plugins,
    entry: path.join(ROOT_DIR, 'Entry', 'index.tsx'),
    output: {
        path: BUILD_DIR,
        publicPath: "/",
        filename: "[name].[hash].js",
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
    },
    performance: {
        hints: false,
    },
    resolve: {
        alias: {
            Assets: path.join(ROOT_DIR, 'Assets'),
            Entry: path.join(ROOT_DIR, 'Entry'),
            Modules: path.join(ROOT_DIR, 'Modules'),
            Common: path.join(ROOT_DIR, 'Common')
        },
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        strictExportPresence: true,
        rules: [
            // TS.
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            // Вёрстка.
            {
                test: /\.(html)$/, use: ["html-loader"]
            },
            // Стили.
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                            modules: {
                                localIdentName: "[path][name]__[local]__[hash:base64:5]",
                                namedExport: false,
                                exportLocalsConvention: 'as-is',
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            // Модули стилей.
            {
                test: /\.(s[ac])ss$/i,
                use: ["sass-loader"],
            },
            // Иконки.
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "Assets/images/[name][ext]"
                },
            },
            // Шрифты.
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "Assets/fonts/[name][ext]",
                },
            },
        ],
    }
};