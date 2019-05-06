/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slash = require("slash");
const { pathOr } = require("ramda");
const webpack = require("webpack");
const routes = require("./src/routes");
const sitemap = require("./src/sitemap");
const config = require("./src/config");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const pageTemplate = path.resolve("./src/templates/article.js");
      const blogPosts = pathOr(
        [],
        ["data", "allContentfulBlogPost", "edges"],
        result
      );

      blogPosts.forEach((edge, index) => {
        createPage({
          path: `${routes.writing}${edge.node.slug}/`,
          component: slash(pageTemplate),
          context: {
            current: edge.node.id,
            next: pathOr(null, [index - 1, "node", "id"], blogPosts),
            prev: pathOr(null, [index + 1, "node", "id"], blogPosts)
          }
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)]
  });
};

exports.onPostBuild = async ({ graphql }) => {
  const pages = [
    { route: "/", changefreq: "weekly", priority: 1 },
    { route: "/about/", changefreq: "monthly", priority: 0.5 },
    { route: "/writing/", changefreq: "daily", priority: 0.8 }
  ];

  try {
    const blogPostResponse = await graphql(`
      {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              slug
              updatedAt
            }
          }
        }
      }
    `);
    const blogPosts = pathOr(
      [],
      ["data", "allContentfulBlogPost", "edges"],
      blogPostResponse
    ).map(blogPost => blogPost.node);

    console.log("generating sitemap");
    sitemap.createSitemap({
      hostname: config.baseUrl,
      cacheTime: 600000,
      urls: [
        ...pages.map(page => ({
          url: page.route,
          changefreq: page.changefreq,
          priority: page.priority
        })),
        ...blogPosts.map(blogPost => ({
          url: `${routes.writing}${blogPost.slug}/`,
          changefreq: "monthly",
          lastMod: sitemap.formatDate(blogPost.updatedAt),
          priority: 0.5
        }))
      ]
    });
    console.log("finished generating sitemap");
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
};
