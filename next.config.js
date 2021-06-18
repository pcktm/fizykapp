const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = process.env.NODE_ENV === 'production' ? withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: process.env.NODE_ENV === 'production' ? runtimeCaching : null,
  },
}) : {};