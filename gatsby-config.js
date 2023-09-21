/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: `CTFL Testing`,
    description: "Testing Gatsby and Contentful integrations",
    twitterUsername: "none",
    image: "none",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CTFL_ACCESS_TOKEN,
        spaceId: process.env.CTFL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
