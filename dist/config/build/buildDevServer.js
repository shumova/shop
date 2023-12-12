export function buildDevServer(_a) {
    var port = _a.port;
    return {
        port: port !== null && port !== void 0 ? port : "8800",
        open: true,
        historyApiFallback: true
    };
}
