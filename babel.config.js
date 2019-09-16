module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
        firefox: '50',
        chrome: '40',
        safari: '11.1',
        ie: '7'
      },
    }],
  ],
};