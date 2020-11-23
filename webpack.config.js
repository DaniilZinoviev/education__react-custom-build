const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  const { MODE: mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProd
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          }
        : "style-loader",
      "css-loader",
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Webpack application | App",
        buildTime: new Date().toISOString(),
        template: "public/index.html",
      }),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "main-[hash:4].css",
        })
      );
    }

    return plugins;
  };

  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: isProd ? "production" : isDev && "development",

    module: {
      rules: [
        // JS Transpiling
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },

        // Load CSS
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },

        // Load SASS || SCSS
        {
          test: /\.s[ac]ss$/,
          use: [...getStyleLoaders(), "sass-loader"],
        },

        // Load images
        {
          test: /\.(svg|png|jpe?g|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:4].[ext]",
              },
            },
          ],
        },

        // Load fonts
        {
          test: /\.(otf|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]",
              },
            },
          ],
        },

        // Load different files
        {
          test: /\.(txt|pdf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },

    plugins: getPlugins(),

    devServer: {
      open: true,
    },
  };
};
