const { PUBLIC_URL } = process.env;

module.exports = {
  pathPrefix: PUBLIC_URL,
  plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`]
};
