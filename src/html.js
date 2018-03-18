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
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="stylesheet" href="https://use.typekit.net/jlj1nyv.css" />
          {/* <link rel="stylesheet" href="//basehold.it/33" /> */}
          <link rel="stylesheet" href="/fonts.css" />
          <link rel="stylesheet" href="/dracula.css" />
          {css}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WXK2BZD');`
            }}
          />
        </head>
        <body {...this.props.bodyAttributes}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-WXK2BZD'
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
