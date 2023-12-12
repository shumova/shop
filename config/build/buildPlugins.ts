import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import path from 'path';
import { BuildOptions } from './types/types';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const {mode, paths, analyzer} = options;
	const isDev = mode === 'development';
  const isProd = mode === 'production';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: path.resolve(paths.html)
		})
	];
	
	if (isDev) {
		plugins.push(
			new webpack.ProgressPlugin()
		)
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css',
				chunkFilename: 'css/[name].[contenthash].css'
			})
		)
	}

	if (analyzer) {
		plugins.push(
			new BundleAnalyzerPlugin()
		)
	}

	return plugins;
}