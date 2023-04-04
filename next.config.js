module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
        pages: 'frontend/pages',
      });
    }
    return config;
  },
};

