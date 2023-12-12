import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins(options) {
    var mode = options.mode, paths = options.paths, analyzer = options.analyzer, platform = options.platform;
    var isDev = mode === 'development';
    var isProd = mode === 'production';
    var plugins = [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.html)
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
