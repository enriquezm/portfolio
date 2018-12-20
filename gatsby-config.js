module.exports = {
  siteMetadata: {
    title: `SUPER meS`,
    description: `Hijacking the human's visual system with motion and web animation. Or at least trying to.`
  },
  plugins : [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:  `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:700`,
          `roboto\:400`
        ]
      }
    },
  ]
}
