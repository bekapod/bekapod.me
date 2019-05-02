import React from "react";
import PropTypes from "prop-types";
import MiniPost from "../MiniPost";

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <MiniPost key={post.id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default PostList;
