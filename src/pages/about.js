// @flow
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import config from "../config";

export default () => (
  <Layout>
    <PageContent>
      <Helmet>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <title>🌟 About | bekapod.me</title>
        {/* eslint-enable jsx-a11y/accessible-emoji */}
        <meta
          name="description"
          content="A page all about me, Becky (bekapod)."
        />
        <link rel="canonical" href={`${config.baseUrl}/about/`} />
        <script type="application/ld+json">
          {`{
            "@id": "${config.baseUrl}/about/",
            "@context": "http://schema.org",
            "@type": "AboutPage",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@id": "${config.baseUrl}/",
                    "name": "Home"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@id": "${config.baseUrl}/about/",
                    "name": "About"
                  }
                }
              ]
            },
            "publisher": {
              "@id": "${config.baseUrl}/about/"
            },
            "name": "About | bekapod.me",
            "description": "A page all about me, Becky (bekapod)."
          }`}
        </script>
      </Helmet>

      <h1>About Me</h1>
      <p>
        {"Hi I'm Becky and I'm a software engineer at "}
        <a
          href="https://www.inviqa.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Inviqa
        </a>
        . Previously I have been a front-end dev at Yoma Ltd and a web dev at
        Outgoing Ltd.
      </p>
      <p>
        I like to write front-end code (obviously), my main focus at work being
        HTML, CSS and Javascript. Outside of work I play around with React,
        Elixir and at some point in the near future I would like to try my hand
        at C++ and Electronics.{" "}
        <span role="img" aria-hidden>
          😊
        </span>
      </p>
      <p>
        My life is not all about code though, I also love my Nintendo Switch,
        pretending I know how to sew on my sewing machine and collecting/reading
        real paper books!
      </p>
      <p>
        I can be contacted via{" "}
        <a
          href="https://twitter.com/bekapod"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/rebekah-jones-b3622a40/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        and of course,{" "}
        <a
          href="mailto:hello@bekapod.me?subject=Hello!&body="
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Email
        </a>
        .
      </p>
    </PageContent>
  </Layout>
);
