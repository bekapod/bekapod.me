/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import PageContent from "../components/PageContent";
import PostList from "../components/PostList";

export default class extends Component {
  static propTypes = {
    data: PropTypes.shape({
      all: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({ node: PropTypes.shape }))
      })
    }).isRequired
  };

  render() {
    const all = this.props.data.all.edges.map(article => article.node);

    return (
      <PageContent>
        <h1>Writing</h1>
        <PostList posts={all} />
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
