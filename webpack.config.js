const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {

  const { MODE: mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    mode: isProd ? 'production' : isDev && 'development',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "./",
              },
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(svg|png|jpe?g|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:7].[ext]",
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
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack application | App",
        buildTime: new Date().toISOString(),
        template: "public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "main-[hash:4].css",
      }),
    ],

    devServer: {
      open: true,
    },
  };
};
