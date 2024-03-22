import nextra from 'nextra';

const withNextra = nextra('nextra-theme-blog', './theme.config');

export default withNextra({
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**"
      }
    ]
  }
});
