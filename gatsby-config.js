module.exports = {
  pathPrefix: "/gatsby-react-bootstrap-starter",
  siteMetadata: {
    title: `Entabene`,
    description: `Entabene Beach House built by Justine Hill using javascript, gatsby and react.`,
    author: `Justine Hill`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/home`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: "static/EntabeneFavicon.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
