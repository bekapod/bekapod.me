/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { media } from "../../helpers/media";
import { lineHeight } from "../../helpers/verticalRhythm";

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-family-accent);
  font-size: var(--font-size-sm);
  line-height: ${lineHeight("sm")};

  > * {
    width: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: var(--spacing-xs) var(--spacing-xs);
    padding: var(--spacing-xs) 0;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background-image: none;
    border-bottom: none;
    transition-duration: 0s;

    span:last-child {
      padding: var(--spacing-xs);
      border: 0 solid transparent;
      border-width: 3px 0;
    }

    &:hover span:last-child {
      border-bottom-color: currentColor;
    }
  }

  .Navigation-me:hover .icon-emo-happy::before {
    content: "";
  }

  ${media.medium`
    flex-direction: row;

    > * {
      width: calc(100% / 3);
    }

    a {
      margin: var(--spacing-xs) var(--spacing-sm);
      padding: var(--spacing-sm) var(--spacing-sm);
    }
  `};
`;

const NavigationMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  order: 2;
  padding: var(--spacing-sm) 0;

  a {
    width: 85px;
  }

  ${media.medium`
    order: 1;
    width: auto;
  `};
`;

const NavigationSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  order: 1;
  background-color: rgba(0, 0, 0, 0.1);

  ${media.medium`
    justify-content: flex-end;
    order: 2;
    background-color: transparent;
  `};
`;

const NavigationIcon = styled.span`
  font-size: 1.25em;
  font-weight: 400;
  margin-bottom: var(--spacing-xs);

  &:last-child {
    margin-bottom: 0;
  }
`;

export default () => (
  <StyledNavigation>
    <span className="Navigation-spacer" />

    <NavigationMenu>
      <Link to="/">
        <NavigationIcon className="icon-home" />
        <span>Home</span>
      </Link>

      <Link to="/about" className="Navigation-me">
        <NavigationIcon className="icon-emo-happy" />
        <span>About</span>
      </Link>

      <Link to="/writing">
        <NavigationIcon className="icon-feather" />
        <span>Writing</span>
      </Link>
    </NavigationMenu>

    <NavigationSocial>
      <a
        href="https://github.com/bekapod/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        title="My github page"
      >
        <NavigationIcon className="icon-github" />
      </a>

      <a
        href="https://twitter.com/bekapod"
        target="_blank"
        rel="nofollow noopener noreferrer"
        title="My twitter feed"
      >
        <NavigationIcon className="icon-twitter" />
      </a>

      <a
        href="https://www.linkedin.com/in/rebekah-jones-b3622a40/"
        target="_blank"
        rel="nofollow noopener noreferrer"
        title="My linkedin profile"
      >
        <NavigationIcon className="icon-linkedin" />
      </a>
    </NavigationSocial>
  </StyledNavigation>
);
