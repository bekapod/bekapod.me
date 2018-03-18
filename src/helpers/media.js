/* eslint-disable import/prefer-default-export */
import { css } from "styled-components";

const sizes = {
  medium: 768
};

/* eslint-disable no-param-reassign */
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const size = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
/* eslint-enable no-param-reassign */
