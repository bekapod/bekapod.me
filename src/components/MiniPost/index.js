import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import PostDate from "../../components/PostDate";
import routes from "../../routes";
import { lineHeight } from "../../helpers/verticalRhythm";
import * as variables from "../../helpers/variables";

const StyledMiniPost = styled(Link)`
  padding: ${variables.spacing.lg}px;
  text-decoration: none;
  border-bottom: 2px solid ${variables.colors.secondary};

  ${props =>
    props.box
      ? `
    background-color: ${variables.colors.gray};
  `
      : `
    margin: 0 calc(${variables.spacing.lg}px * -1);
  `};
`;

const Title = styled.h2`
  margin: 0;
`;

const Summary = styled.p`
  margin: 0;
  color: ${variables.colors.grayDark};

  ${props =>
    props.box
      ? `
    font-size: ${variables.fontSizes.sm}px;
    line-height: ${lineHeight("sm")};
  `
      : `
    font-size: ${variables.fontSizes.base}px;
    line-height: ${lineHeight("base")};
  `};
`;

const PostDateWrapper = styled.div`
  margin-bottom: ${variables.spacing.lg}px;
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
