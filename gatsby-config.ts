import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jason-Lew-Personal-Site`,
    siteUrl: `https://jasonlewcodes.github.io/Jason-Lew-Personal-Site/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
  ],
}

module.exports = {
  pathPrefix: "/Jason-Lew-Personal-Site",
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/jason.jpg',
        include_favicon: true,
      },
    },
  ]
}

export default config
