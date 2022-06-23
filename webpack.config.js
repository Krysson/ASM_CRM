const path = require("path")

module.exports = {
  entry: "./app/index.html", // changed from Main.js for testing
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    allowedHosts: "all", // this solved the headers issue in gitpod
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    liveReload: false,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader"
      }
    ]
  }
}
