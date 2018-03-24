import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { lineHeight } from "../../helpers/verticalRhythm";
import * as variables from "../../helpers/variables";

const StyledPostDate = styled.time`
  display: block;
  color: ${variables.colors.grayDark};
  font-family: ${variables.fonts.accent};
  font-size: ${variables.fontSizes.sm}px;
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
