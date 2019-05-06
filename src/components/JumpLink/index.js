import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media } from "../../helpers/media";
import { lineHeight } from "../../helpers/verticalRhythm";
import * as variables from "../../helpers/variables";

const StyledJumpLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: ${props => (props.next ? "auto" : 0)};
  padding: 0;
  font-family: ${variables.fonts.accent};
  font-weight: 600;
  line-height: ${lineHeight("base")};
  text-decoration: none;
  text-transform: uppercase;
  background: none;
  border-bottom: none;

  &:hover {
    color: ${variables.colors.primary};
  }

  ${media.medium`
    max-width: 40%;
  `};
`;

const JumpLinkIcon = styled.span`
  order: ${props => (props.next ? 2 : "auto")};
  position: relative;
  top: ${props => (props.next ? 0 : "1px")};
  width: 50px;
  text-align: ${props => (props.next ? "right" : "left")};
`;

const JumpLink = ({ title, url, next, prev }) => (
  <StyledJumpLink
    next={next}
    prev={prev}
    href={url}
    rel={next ? "next" : "prev"}
  >
    {prev && <JumpLinkIcon prev className="icon-left-open-big" />}
    {next && <JumpLinkIcon next className="icon-right-open-big" />}
    {title}
  </StyledJumpLink>
);

JumpLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  next: PropTypes.bool,
  prev: PropTypes.bool
};

JumpLink.defaultProps = {
  next: false,
  prev: false
};

export default JumpLink;
