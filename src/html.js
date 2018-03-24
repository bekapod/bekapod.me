/* eslint-disable global-require, react/prefer-stateless-function, react/prop-types, react/no-danger, no-console */
import React, { Component } from "react";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes} lang="en" dir="ltr">
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
          {this.props.headComponents}
          <link rel="stylesheet" href="https://use.typekit.net/jlj1nyv.css" />
          {/* <link rel="stylesheet" href="//basehold.it/33" /> */}
          <link rel="stylesheet" href="/fonts.css" />
          {css}
          <script
            dangerouslySetInnerHTML={{
              __html: `${process.env.TAG_MANAGER_SCRIPT}`
            }}
          />
        </head>
        <body {...this.props.bodyAttributes}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src='${process.env.TAG_MANAGER_NOSCRIPT}'
          height='0' width='0' style='display:none;visibility:hidden'></iframe>`
            }}
          />
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
