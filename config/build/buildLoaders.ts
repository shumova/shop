import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import { buildBabelLoader } from "./babel/buildBabelLoader";
// import ReactRefreshTypeScript from "react-refresh-typescript";

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

	// const tsLoader = {
	// 	test: /\.tsx?$/,
	// 	exclude: /node_modules/,
	// 	use: [
	// 		{
	// 			loader: 'ts-loader',
	// 			options: {
	// 				transpileOnly: isDev,
	// 				getCustomTransformers: () => ({
	// 					before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
	// 				}),
	// 			}
	// 		}
	// 	]
	// }

	// const babelLoader = {
	// 	test: /\.tsx?$/,
	// 	exclude: /node_modules/,
	// 	use: {
	// 		loader: "babel-loader",
	// 		options: {
	// 			presets: [
	// 				'@babel/preset-env', 
	// 				'@babel/preset-typescript', 
	// 				['@babel/preset-react', {
	// 					runtime: isDev ? 'automatic' : 'classic',
	// 				}]
	// 			]
	// 		}
	// 	}
	// }


	const babelLoader = buildBabelLoader(options)

	return [
		// tsLoader,
		// babelLoader,
		babelLoader,
		scssLoaders,
		assetLoader,
		svgrLoader
	]
}
