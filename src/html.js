/* eslint-disable react/no-danger, react/forbid-prop-types, react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents
  } = props;

  return (
    <html {...htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/icons/icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/icon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="stylesheet" href="https://use.typekit.net/jlj1nyv.css" />
        {/* <link rel="stylesheet" href="//basehold.it/33" /> */}
        <link rel="stylesheet" href="/fonts.css" />
        <meta
          name="google-site-verification"
          content="sPckqsM0GvxHdHMxEJegnZg3NYABPhPh9BPvmrUNh5w"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `${process.env.GATSBY_TAG_MANAGER_SCRIPT}`
          }}
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src='${process.env.GATSBY_TAG_MANAGER_NOSCRIPT}'
          height='0' width='0' style='display:none;visibility:hidden'></iframe>`
          }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
