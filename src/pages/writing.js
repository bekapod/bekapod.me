/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { pathOr } from "ramda";
import PageContent from "../components/PageContent";
import PostList from "../components/PostList";

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
      <PageContent>
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
