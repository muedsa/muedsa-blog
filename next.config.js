import nextra from 'nextra';

const withNextra = nextra('nextra-theme-blog', './theme.config');

export default withNextra({
  images: {
    domains: [
      'muedsa.com',
      'github.com',
      'raw.githubusercontent.com',
      'pic1.zhimg.com'
    ]
  }
});
