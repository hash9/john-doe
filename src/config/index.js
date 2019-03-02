import pkg from '../../package.json';

const config = {
  homepage: pkg.homepage,
  GA_CONFIG: {
    trackingId: 'UA-135475323-1', //Unique Google Analytics tracking number
    debug: true,
    gaOptions: {
      cookieDomain: 'none',
    },
  },
  disqusShortname: 'space-h', //Disqus shortname
};

export default config;
