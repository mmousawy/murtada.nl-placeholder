/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://murtada.nl',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://murtada.nl/server-sitemap-index.xml',
    ],
  },
};
