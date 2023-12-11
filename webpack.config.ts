import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode,
  port: number
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
  
    entry: path.resolve(__dirname, 'src', 'index.ts'),
  
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new webpack.ProgressPlugin()
    ],
  
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: isDev ? {
      port: env.port ?? "8800",
      open: true,
      static: './dist',
    } : undefined,

    devtool: isDev ? 'inline-source-map' : false,
  }

   return config;
};