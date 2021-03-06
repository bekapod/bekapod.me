require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "lang-"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/fonts.css": ["Cache-Control: public, max-age=31536000, immutable"],
          "/*": [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains"
          ],
          "/*.css": ["X-Content-Type-Options: nosniff"],
          "/*.js": [
            "Content-Type: text/javascript; charset=utf-8",
            "Cache-Control: public, max-age=31536000, immutable",
            "X-Content-Type-Options: nosniff"
          ],
          "/favicon.ico": [
            "Content-Type: image/x-icon",
            "Cache-Control: public, max-age=600"
          ],
          "/manifest.webmanifest": [
            "Content-Type: application/manifest+json; charset=utf-8"
          ]
        }
      }
    }
  ]
};
