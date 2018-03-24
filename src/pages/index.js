/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import pathOr from "ramda/src/pathOr";
import { Helmet } from "react-helmet";
import PostGrid from "../components/PostGrid";
import config from "../config";
import { media } from "../helpers/media";
import { spacing } from "../helpers/variables";

const Home = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${spacing.xxl}px 0;
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
  margin-top: ${spacing.lg}px;

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
      <Home role="main">
        <Helmet>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <title>
            🌟 Becky Jones, bekapod, front-end developer | bekapod.me
          </title>
          {/* eslint-enable jsx-a11y/accessible-emoji */}
          <meta
            name="description"
            content="A blog about front-end development, javascript, React and other web programming things."
          />
          <link rel="canonical" href={config.baseUrl} />
        </Helmet>

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
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
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
