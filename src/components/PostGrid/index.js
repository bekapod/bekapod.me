import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MiniPost from "../MiniPost";

const StyledPostGrid = styled.div`
  display: flex;
  justify-content: center;
`;

const PostGridItem = styled.div`
  margin-right: var(--grid-gutters);
  width: calc(100% / 3 - (var(--grid-gutters) * 2));
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
