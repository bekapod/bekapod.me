import React from "react";
import PropTypes from "prop-types";
import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import "prismjs/themes/prism-okaidia.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { media } from "../helpers/media";
import { lineHeight } from "../helpers/verticalRhythm";

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${normalize()}

  :root {
    --color-primary: #F97DBB;
    --color-secondary: #344396;
    --color-secondary-dark: #162155;
    --color-tertiary: #70BCC9;
    --color-selection: #fff200;
    --color-gray-dark: #222f3e;
    --color-gray: #D5C9CB;
    --color-gray-light: #ecf0f1;
    --color-white: #FFFFFF;

    --font-family-base: 'adobe-caslon-pro', serif;
    --font-family-accent: 'futura-pt', sans-serif;
    --font-family-code: 'source-code-pro', monospace;

    --font-size-base: 22px;
    --font-size-sm: 18px;
    --font-size-md: 32px;
    --font-size-xl: 64px;

    --spacing-xxl: 99px;
    --spacing-xl: 66px;
    --spacing-lg: 33px;
    --spacing-md: 16.5px;
    --spacing-sm: 8.25px;
    --spacing-xs: 4.125px;

    --page-gutters: 40px;
    --grid-gutters: 20px;

    --height-header: auto;
    --height-footer: auto;

    --size-zigzag: 16.5px;
  }

  ${media.medium`
    :root {
      --height-header: 98px;
    }
  `}

  html {
    color: var(--color-gray-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    font-weight: 400;
    line-height: ${lineHeight("base")};
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    color: var(--color-gray-dark);
    background-color: var(--color-selection);
  }

  ::-moz-selection {
    color: var(--color-gray-dark);
    background-color: var(--color-selection);
  }

  p,
  ol,
  ul,
  blockquote,
  pre {
    margin: var(--spacing-lg) 0;
  }

  ol,
  ul {
    padding-left: var(--spacing-lg);
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-family-accent);
  }

  h1,
  h2 {
    color: var(--color-secondary);
  }

  h2,
  h3 {
    margin: var(--spacing-xl) 0 var(--spacing-lg);
    font-size: var(--font-size-md);
    font-weight: 500;
    line-height: ${lineHeight("md")};
  }

  h1 {
    margin: var(--spacing-lg) 0;
    font-size: var(--font-size-xl);
    font-weight: 700;
    letter-spacing: -1px;
    line-height: ${lineHeight("lg")};
  }

  a,
  strong,
  code {
    padding: 0 var(--spacing-xs);
    line-height: 1;
  }

  a,
  strong {
    padding-top: 5px;
  }

  a {
    display: inline-block;
    color: var(--color-secondary);
    text-decoration: underline wavy;
    text-decoration-skip-ink: auto;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, transparent 50%, var(--color-tertiary) 50%);
    transition: all 0.25s ease-out;

    &:hover {
      color: var(--color-secondary-dark);
      background-position: 0 100%;
      transition-timing-function: ease-in;
    }
  }

  strong {
    display: inline-block;
    color: var(--color-secondary-dark);
    font-weight: 400;
    background-color: var(--color-tertiary);
  }

  code {
    font-family: var(--font-family-code);
    font-size: var(--font-size-sm);
    font-weight: 400;
    background-color: var(--color-gray);
  }

  pre code {
    display: block;
    overflow-x: auto;
    color: var(--color-white);
    padding: var(--spacing-md);
    line-height: ${lineHeight("sm")};
    background-color: var(--color-gray-dark);
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
