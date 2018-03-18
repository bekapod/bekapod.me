/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slash = require("slash");
const { pathOr } = require("ramda");
const routes = require("./src/routes");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
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
      const blogPosts = pathOr([], ['data', 'allContentfulBlogPost', 'edges'], result);

      blogPosts.forEach((edge, index) => {
        createPage({
          path: `${routes.writing}${edge.node.slug}`,
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
