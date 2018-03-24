import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import PostDate from "../../components/PostDate";
import routes from "../../routes";
import { lineHeight } from "../../helpers/verticalRhythm";

const StyledMiniPost = styled(Link)`
  padding: var(--spacing-lg);
  text-decoration: none;
  border-bottom: 2px solid var(--color-secondary);

  ${props =>
    props.box
      ? `
    background-color: var(--color-gray);
  `
      : `
    margin: 0 calc(var(--spacing-lg) * -1);
  `};
`;

const Title = styled.h2`
  margin: 0;
`;

const Summary = styled.p`
  margin: 0;
  color: var(--color-gray-dark);

  ${props =>
    props.box
      ? `
    font-size: var(--font-size-sm);
    line-height: ${lineHeight("sm")};
  `
      : `
    font-size: var(--font-size-base);
    line-height: ${lineHeight("base")};
  `};
`;

const PostDateWrapper = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const MiniPost = ({ post, box }) => (
  <StyledMiniPost to={`${routes.writing}${post.slug}`} box={box}>
    <Title>{post.title}</Title>
    <PostDateWrapper>
      <PostDate date={post.publishDate} />
    </PostDateWrapper>
    <Summary box={box}>{post.summary.summary}</Summary>
  </StyledMiniPost>
);

MiniPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    summary: PropTypes.shape({
      summary: PropTypes.string.isRequired
    })
  }).isRequired,
  box: PropTypes.bool
};

MiniPost.defaultProps = {
  box: false
};

export default MiniPost;
