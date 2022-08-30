const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js');
module.exports = {
  images: {
    domains: [
      'muedsa.com',
      'github.com',
      'raw.githubusercontent.com',
      'pic1.zhimg.com'
    ],
  },
  ...withNextra()
};
