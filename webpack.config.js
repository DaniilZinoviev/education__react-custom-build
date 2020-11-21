module.exports = {
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: "file-loader",
      },
    ],
  },
};
