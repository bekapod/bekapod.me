// @flow
import React from "react";
import styled from "styled-components";
import { media } from "../../helpers/media";
import Navigation from "../Navigation";

const StyledHeader = styled.header`
  position: relative;
  height: var(--height-header);
  background-color: var(--color-primary);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(var(--size-zigzag) * -1);
    width: 100%;
    height: var(--size-zigzag);
    background: linear-gradient(
        -45deg,
        transparent var(--size-zigzag),
        var(--color-primary) 0
      ),
      linear-gradient(
        45deg,
        transparent var(--size-zigzag),
        var(--color-primary) 0
      );
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: var(--size-zigzag) var(--size-zigzag);
  }

  a,
  a:hover {
    color: var(--color-white);
  }

  ${media.medium`
    padding: 0 var(--page-gutters);
  `};
`;

export default () => (
  <StyledHeader>
    <Navigation />
  </StyledHeader>
);
