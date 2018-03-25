import React from "react";
import PropTypes from "prop-types";
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import "prismjs/themes/prism-okaidia.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as variables from "../helpers/variables";
import { lineHeight } from "../helpers/verticalRhythm";
import { media } from "../helpers/media";

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}

  html {
    color: ${variables.colors.grayDark};
    font-family: ${variables.fonts.base};
    font-size: ${variables.fontSizes.base}px;
    font-weight: 400;
    line-height: ${lineHeight("base")};
    background-color: ${variables.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    color: ${variables.colors.grayDark};
    background-color: ${variables.colors.selection};
  }

  ::-moz-selection {
    color: ${variables.colors.grayDark};
    background-color: ${variables.colors.selection};
  }

  p,
  ol,
  ul,
  blockquote,
  pre {
    margin: ${variables.spacing.lg}px 0;
  }

  ol,
  ul {
    padding-left: ${variables.spacing.lg}px;
  }

  h1,
  h2,
  h3 {
    font-family: ${variables.fonts.accent};
  }

  h1,
  h2 {
    color: ${variables.colors.secondary};
  }

  h2,
  h3 {
    margin: ${variables.spacing.xl}px 0 ${variables.spacing.lg}px;
    font-size: ${variables.fontSizes.md}px;
    font-weight: 500;
    line-height: ${lineHeight("md")};
  }

  h1 {
    margin: ${variables.spacing.lg}px 0;
    font-size: ${variables.fontSizes.xl}px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: ${lineHeight("lg")};
  }

  ${media.medium`
    font-size: ${variables.fontSizes.xxl}px;
  `}

  a,
  strong,
  code {
    padding: 0 ${variables.spacing.xs}px;
    line-height: 1;
  }

  a,
  strong {
    padding-top: 5px;
  }

  a {
    display: inline-block;
    color: ${variables.colors.secondary};
    text-decoration: underline wavy;
    text-decoration-skip-ink: auto;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, transparent 50%, ${
      variables.colors.tertiary
    } 50%);
    transition: all 0.25s ease-out;

    &:hover {
      color: ${variables.colors.secondaryDark};
      background-position: 0 100%;
      transition-timing-function: ease-in;
    }
  }

  strong {
    display: inline-block;
    color: ${variables.colors.secondaryDark};
    font-weight: 400;
    background-color: ${variables.colors.tertiary};
  }

  code {
    font-family: ${variables.fonts.code};
    font-size: ${variables.fontSizes.sm}px;
    font-weight: 400;
    background-color: ${variables.colors.gray};
  }

  pre code {
    display: block;
    overflow-x: auto;
    color: ${variables.colors.white};
    padding: ${variables.spacing.md}px;
    line-height: ${lineHeight("sm")};
    background-color: ${variables.colors.grayDark};
  }

  .lang-text {
    word-wrap: break-word;
  }
`;
/* eslint-enable no-unused-expressions */

const Layout = ({ children }) => (
  <div>
    <Header />

    {children()}

    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
