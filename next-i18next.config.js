/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'ru', 'ar'],
    defaultLocale: 'en',
    pages: {
      '*': ['common'],
      '/404': ['common'],
      '/': ['common'],
      '/about': ['common'],
      '/products': ['common'],
      '/contact': ['common'],
    },
  },
};
