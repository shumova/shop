import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
	const {mode} = options;

	const isProd = mode === 'production';
	const isDev = mode === 'development';

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource'
	}

	const svgrLoader = {
		test: /\.svg$/i,
		use: [{ loader: '@svgr/webpack', options: { icon: true } }]
	}

	const cssLoaderWithModules = {
		loader: "css-loader",
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
			}			
		}
	}

	const scssLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			cssLoaderWithModules,
			'sass-loader',
		],
	}

	const tsLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: isDev
				}
			}
		]
	}

	return [
		tsLoader,
		scssLoaders,
		assetLoader,
		svgrLoader
	]
}
