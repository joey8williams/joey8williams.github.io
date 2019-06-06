const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS,withImages],
  {
    webpack: (config,options) => {
      config.module.rules.push({
        test: /\.pdf/,
        use: 'url-loader'
    });

      return config
    }
  });

