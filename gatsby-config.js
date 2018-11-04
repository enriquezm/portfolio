module.exports = {
  siteMetadata: {
    title: `SUPER mES`,
    description: `Hijacking the human's visual system with motion and web animation.`
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
