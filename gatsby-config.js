module.exports = {
  siteMetadata: {
    title: `SUPER mES`
  },
  plugins : [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300, 900`
        ]
      }
    },
  ]
}
