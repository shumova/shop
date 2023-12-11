import { Configuration } from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildResolvers(otions: BuildOptions): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
	}
}