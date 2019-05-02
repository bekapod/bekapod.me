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
        <PageContent role="main">
          <Helmet>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <title>🌟 Writing | bekapod.me</title>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
            <meta
              name="description"
              content="A collection of blog posts about front-end development, javascript, React and other web programming things."
            />
            <link rel="canonical" href={`${config.baseUrl}/writing`} />
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
