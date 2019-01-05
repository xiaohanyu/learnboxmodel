const withCss = require("@zeit/next-css");

const webpackOptions = withCss({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          publicPath: "./",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });

    return config;
  }
});

const configOptions = {
  publicRuntimeConfig: {
    // Will be available on both server and client
  }
};

module.exports = { ...webpackOptions, ...configOptions };
