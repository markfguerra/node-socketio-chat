module.exports = {
    entry: "./webclient/entry.js",
    output: {
        path: __dirname + "/webclient",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};