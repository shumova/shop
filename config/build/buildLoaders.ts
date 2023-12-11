import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(otions: BuildOptions): ModuleOptions["rules"] {
	const isProd = otions.mode === "development";

	const scssLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			'css-loader',
			'sass-loader',
		],
	}

	const tsLoaders = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		tsLoaders,
		scssLoaders
	]
}
