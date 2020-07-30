module.exports = {
  siteMetadata: {
    title: `David Aaron Pierce`,
    description: `Personal website of David Aaron Pierce, web developer based in Seattle.`,
    author: `@da_pierce`,
    links: [
      {
        name: `Github`,
        link: `https://github.com/dapierce`,
      },
      {
        name: `Gitlab`,
        link: `https://gitlab.com/dapierce`,
      },
      {
        name: `Keybase`,
        link: `https://keybase.io/dapierce`,
      },
      {
        name: `Ko-fi`,
        link: `https://ko-fi.com/dapierce`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
