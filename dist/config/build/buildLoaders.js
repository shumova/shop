import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var mode = options.mode;
    var isProd = mode === 'production';
    var isDev = mode === 'development';
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    };
    var svgrLoader = {
        test: /\.svg$/i,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    };
    var scssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoaderWithModules,
            'sass-loader',
        ],
    };
    // const tsLoader = {
    // 	test: /\.tsx?$/,
    // 	use: 'ts-loader',
    // 	exclude: /node_modules/,
    // }
    var tsLoader = {
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
    };
    return [
        tsLoader,
        scssLoaders,
        assetLoader,
        svgrLoader
    ];
}
