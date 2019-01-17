module.exports = {
    entry: "./webpack/entry.js",
    output: {
        path: __dirname + "/assets/js", // or path: path.join(__dirname, "assets/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: "babel-loader",
                query: {
                    presets: ['@babel/react', '@babel/es2015']
                }
            }
        ]
    }
};