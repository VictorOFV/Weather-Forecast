const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
            }
        ]
    },
    resolve: {
        fallback: {
          "http": require.resolve("stream-http"),
          "url": require.resolve("url/"),
          "buffer": require.resolve("buffer/"),
          "https": require.resolve("https-browserify"),
          "querystring": require.resolve("querystring-es3")
        }
      }
};