import React from "react";
import styled from "styled-components";
import { lineHeight } from "../../helpers/verticalRhythm";
import * as variables from "../../helpers/variables";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  color: ${variables.colors.white};
  font-family: ${variables.fonts.accent};
  font-size: ${variables.fontSizes.sm}px;
  font-weight: 400;
  line-height: ${lineHeight("sm")};
  background-color: ${variables.colors.secondary};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(${variables.sizes.zigzag}px * -1);
    width: 100%;
    height: ${variables.sizes.zigzag}px;
    background: linear-gradient(
        -45deg,
        ${variables.colors.secondary} ${variables.sizes.zigzag}px,
        transparent 0
      ),
      linear-gradient(
        45deg,
        ${variables.colors.secondary} ${variables.sizes.zigzag}px,
        transparent 0
      );
    background-repeat: repeat-x;
    background-position: left top;
    background-size: ${variables.sizes.zigzag}px 23px;
  }

  p:not(:last-child) {
    margin-bottom: 0;
  }

  .contentful-attribution {
    width: 100px;
    border: none;

    &:hover {
      background: none;
    }
  }
`;

export default () => (
  <StyledFooter>
    <p>
      &copy; Rebekah Jones 2018.{" "}
      <span role="img" aria-label="Heart emoji">
        💖
      </span>
    </p>
    <p>
      <a
        href="https://www.contentful.com/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        className="contentful-attribution"
      >
        <img
          src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
          alt="Powered by Contentful"
        />
      </a>
    </p>
  </StyledFooter>
);
