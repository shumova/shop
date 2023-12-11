import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(otions: BuildOptions): DevServerConfiguration {
	return {
		port: otions.port ?? "8800",
		open: true
	}
}