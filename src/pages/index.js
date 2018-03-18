/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { pathOr } from "ramda";
import PostGrid from "../components/PostGrid";
import { media } from "../helpers/media";

const Home = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  padding: var(--spacing-xxl) 0;
`;

const Title = styled.h1`
  align-self: stretch;
  margin-top: 0;
  text-align: center;
`;

const Description = styled.p`
  width: 80%;
  text-align: center;

  ${media.medium`
    width: 60%;
  `};
`;

const PostGridWrapper = styled.div`
  width: 90%;
  margin-top: var(--spacing-lg);

  ${media.medium`
    width: 80%;
  `};
`;

export default class extends Component {
  static propTypes = {
    data: PropTypes.shape({
      latest: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({ node: PropTypes.shape }))
      })
    })
  };

  static defaultProps = {
    data: {
      latest: {
        edges: []
      }
    }
  };

  render() {
    const latest = pathOr([], ["latest", "edges"], this.props.data).map(
      article => article.node
    );

    return (
      <Home>
        <Title>
          {"Hi, I'm Becky "}
          <span role="img" aria-label="Waving emoji">
            👋🏻
          </span>
        </Title>

        <Description>
          This is a blog about front-end development, javascript, React and
          basically anything else I find interesting at the time. Enjoy!{" "}
          <span role="img" aria-label="Sparkle emoji">
            ✨
          </span>
        </Description>

        <PostGridWrapper>
          <PostGrid posts={latest} />
        </PostGridWrapper>
      </Home>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query latestQuery {
    latest: allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
      limit: 3
    ) {
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
