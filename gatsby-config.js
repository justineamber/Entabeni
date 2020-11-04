module.exports = {
  siteMetadata: {
    title: `Entabeni`,
    description: `Entabeni built by Justine Hill using javascript, gatsby and react.`,
    author: `Justine Hill`,
    pathPrefix: "/Entabeni",
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
        start_url: `/index`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: "static/Favicon-32X32.png",
      },
    },
  ],
}
