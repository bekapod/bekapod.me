/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import pathOr from "ramda/src/pathOr";
import { Helmet } from "react-helmet";
import { createClient } from "contentful";
import qs from "qs";
import routes from "../routes";
import config from "../config";
import PageContent from "../components/PageContent";
import PostDate from "../components/PostDate";
import Code from "../components/Code";
import Comments from "../components/Comments";
import JumpLinkWrapper from "../components/JumpLinkWrapper";
import JumpLink from "../components/JumpLink";

export default class extends Component {
  componentDidMount() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
      host: 'preview.contentful.com'
    });

    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });

    const entry = client.getEntry(query.entryId).then(entry => {
      this.setState(() => ({
        article: entry
      }))
    })
  }

  render() {
    const article = pathOr(null, ['article'], this.state);

    return (
      process.env.NODE_ENV === "development" && article && <PageContent role="main">
        <Helmet>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <title>🌟 {article.fields.title} | Writing | bekapod.me</title>
          {/* eslint-enable jsx-a11y/accessible-emoji */}
        </Helmet>

        <article>
          <h1>{article.fields.title}</h1>
          <PostDate date={article.sys.createdAt} />
          <Markdown
            source={pathOr("", ["fields", "content"])(article)}
            renderers={{
              code: Code
            }}
          />
        </article>
      </PageContent>
    );
  }
}