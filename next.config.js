const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/myportofolio/' : '',
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
      'files.virgool.io',
    ],
  },
};
