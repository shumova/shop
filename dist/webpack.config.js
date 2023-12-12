import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
export default (function (env) {
    var _a, _b, _c;
    var paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 8000,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        paths: paths,
        analyzer: env.analyzer,
        platform: (_c = env.platform) !== null && _c !== void 0 ? _c : 'desktop'
    });
    return config;
});
