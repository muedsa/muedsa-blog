import nextra from 'nextra';

const withNextra = nextra('nextra-theme-blog', './theme.config');

export default withNextra({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**"
      }
    ]
  }
});
