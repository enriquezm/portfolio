module.exports = {
  siteMetadata: {
    title: `Super mES`
  },
  plugins : [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300, 700`
        ]
      }
    }
  ]
}
