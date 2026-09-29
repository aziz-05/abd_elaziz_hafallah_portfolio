module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/aboutme', destination: '/about', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
      {
        source: '/posts/System-of-systems-&-Smart-contracts',
        destination: '/posts/qos-aodv-vanet',
        permanent: true,
      },
    ];
  },
};
