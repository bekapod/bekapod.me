// @flow
import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";
import { media } from "../../helpers/media";
import * as variables from "../../helpers/variables";

const StyledHeader = styled.header`
  position: relative;
  height: auto;
  background-color: ${variables.colors.primary};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc((${variables.sizes.zigzag}px - 1px) * -1);
    width: 100%;
    height: ${variables.sizes.zigzag}px;
    background: linear-gradient(
        -45deg,
        transparent ${variables.sizes.zigzag}px,
        ${variables.colors.primary} 0
      ),
      linear-gradient(
        45deg,
        transparent ${variables.sizes.zigzag}px,
        ${variables.colors.primary} 0
      );
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: ${variables.sizes.zigzag}px ${variables.sizes.zigzag}px;
  }

  a,
  a:hover {
    color: ${variables.colors.white};
  }

  ${media.medium`
    height: ${variables.sizes.header}px;
    padding: 0 ${variables.gutters.page}px;
  `};
`;

export default () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
);
