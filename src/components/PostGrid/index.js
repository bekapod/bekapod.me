import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MiniPost from "../MiniPost";
import * as variables from "../../helpers/variables";
import { media } from "../../helpers/media";

const StyledPostGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const PostGridItem = styled.div`
  width: 100%;

  ${media.medium`
    width: calc(100% / 3 - (${variables.gutters.grid}px * 2));
    margin-right: ${variables.gutters.grid}px;
  `};
`;

const PostGrid = ({ posts }) => (
  <StyledPostGrid>
    {posts.map(post => (
      <PostGridItem>
        <MiniPost key={post.id} box post={post} />
      </PostGridItem>
    ))}
  </StyledPostGrid>
);

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default PostGrid;
