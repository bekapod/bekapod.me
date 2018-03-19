// @flow
import React from "react";
import { Helmet } from "react-helmet";
import PageContent from "../components/PageContent";
import config from "../config";

export default () => (
  <PageContent role="main">
    <Helmet>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <title>🌟 About | bekapod.me</title>
      {/* eslint-enable jsx-a11y/accessible-emoji */}
      <meta name="description" content="A page all about me, Becky (bekapod)." />
      <link rel="canonical" href={`${config.baseUrl}/about`} />
    </Helmet>

    <h1>About Me</h1>
    <p>
      {"Hi I'm Becky and I'm a front-end dev at "}
      <a
        href="https://www.inviqa.com/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Inviqa
      </a>. Previously I have been a front-end dev at{" "}
      <a
        href="https://www.yoma.co.uk"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Yoma
      </a>
      and a web dev at{" "}
      <a
        href="http://www.outgoing.co.uk/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Outgoing
      </a>.
    </p>
    <p>
      I like to write front-end code (obviously), my main focus at work being
      HTML, CSS and Javascript. Outside of work I play around with React, Elixir
      and more recently Go.
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
      </a>,{" "}
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
      </a>.
    </p>
  </PageContent>
);
