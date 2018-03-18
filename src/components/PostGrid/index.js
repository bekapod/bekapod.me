import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MiniPost from "../MiniPost";

const StyledPostGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--grid-gutters);
`;

const PostGrid = ({ posts }) => (
  <StyledPostGrid>
    {posts.map(post => <MiniPost box post={post} />)}
  </StyledPostGrid>
);

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default PostGrid;
