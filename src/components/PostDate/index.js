import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { lineHeight } from "../../helpers/verticalRhythm";

const StyledPostDate = styled.time`
  display: block;
  color: var(--color-gray-dark);
  font-family: var(--font-family-accent);
  font-size: var(--font-size-sm);
  font-style: italic;
  line-height: ${lineHeight("sm")};
`;

const PostDate = ({ date }) => (
  <StyledPostDate time={date}>{moment(date).fromNow()}</StyledPostDate>
);

PostDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default PostDate;
