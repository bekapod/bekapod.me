/* eslint-disable react/prefer-stateless-function */
import { graphql } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import pathOr from "ramda/src/pathOr";
import prop from "ramda/src/prop";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PostList from "../components/PostList";
import config from "../config";
import routes from "../routes";

export default class extends Component {
  static propTypes = {
    data: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({ node: PropTypes.shape }))
      })
    })
  };

  static defaultProps = {
    data: {
      all: {
        edges: []
      }
    }
  };

  render() {
    const { data } = this.props;
    const all = pathOr([], ["all", "edges"], data).map(prop("node"));

    return (
      <Layout>
        <PageContent>
          <Helmet>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <title>🌟 Writing | bekapod.me</title>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
            <meta
              name="description"
              content="A collection of blog posts about front-end engineering, javascript, React and other web programming things."
            />
            <link rel="canonical" href={`${config.baseUrl}${routes.writing}`} />
            <script type="application/ld+json">
              {`{
                "@context": "http://schema.org",
                "@type": "CollectionPage",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "@id": "${config.baseUrl}/",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "@id": "${config.baseUrl}${routes.writing}",
                        "name": "Writing"
                      }
                    }
                  ]
                },
                "publisher": {
                  "@id": "${config.baseUrl}/about/",
                  "@type": "Person"
                },
                "name": "Writing | bekapod.me",
                "description": "A collection of blog posts about front-end engineering, javascript, React and other web programming things."
              }`}
            </script>
          </Helmet>

          <h1>Writing</h1>
          {all.length ? <PostList posts={all} /> : <p>Nothing here yet.</p>}
        </PageContent>
      </Layout>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query allQuery {
    all: allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          summary {
            summary
          }
          publishDate
        }
      }
    }
  }
`;
/* eslint-enable no-undef */
