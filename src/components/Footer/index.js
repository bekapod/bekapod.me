import React from "react";
import styled from "styled-components";
import { lineHeight } from "../../helpers/verticalRhythm";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: var(--height-footer);
  color: var(--color-white);
  font-family: var(--font-family-accent);
  font-size: var(--font-size-sm);
  font-weight: 400;
  line-height: ${lineHeight("sm")};
  background-color: var(--color-secondary);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(var(--size-zigzag) * -1);
    width: 100%;
    height: var(--size-zigzag);
    background: linear-gradient(
        -45deg,
        var(--color-secondary) var(--size-zigzag),
        transparent 0
      ),
      linear-gradient(
        45deg,
        var(--color-secondary) var(--size-zigzag),
        transparent 0
      );
    background-repeat: repeat-x;
    background-position: left top;
    background-size: var(--size-zigzag) 23px;
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
