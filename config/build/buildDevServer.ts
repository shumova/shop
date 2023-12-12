import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
	return {
		port: port ?? "8800",
		open: true,
		historyApiFallback: true
	}
}