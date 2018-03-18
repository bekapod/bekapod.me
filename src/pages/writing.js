/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import pathOr from "ramda/src/pathOr";
import { Helmet } from "react-helmet";
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
    const all = pathOr([], ["all", "edges"], this.props.data).map(
      article => article.node
    );

    return (
      <PageContent role="main">
        <Helmet>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <title>🌟 Writing | bekapod.me</title>
          {/* eslint-enable jsx-a11y/accessible-emoji */}
          <link rel="canonical" href={`${config.baseUrl}/writing`} />
        </Helmet>

        <h1>Writing</h1>
        {all.length ? <PostList posts={all} /> : <p>Nothing here yet.</p>}
      </PageContent>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query allQuery {
    all: allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          summary {
            summary
          }
          createdAt
        }
      }
    }
  }
`;
/* eslint-enable no-undef */
