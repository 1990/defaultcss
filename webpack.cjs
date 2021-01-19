const webpack = require("webpack")
const path = require("path")

module.exports = {
  resolve: {
    fallback: {
      // "path": require.resolve("path-browserify"),
      // "crypto": require.resolve("crypto-browserify"),
      // "stream": require.resolve("stream-browserify"),
      // "util": require.resolve("util")
    }
  },
  entry: {
    app: [ "./client.js" ]
  },
  mode: "development", // production
  target: "web",
  optimization: {
    runtimeChunk: "single",
    splitChunks: { cacheGroups: { commons: { test: /[\\/]node_modules[\\/]/, name: "vendor", chunks: "all" } } }
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundles/[name].js",
    sourceMapFilename: "bundles/[name].js.map"
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ process: "process/browser" }),
    new webpack.DefinePlugin({ "__REACT_DEVTOOLS_GLOBAL_HOOK__": "({ isDisabled: true })" }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
