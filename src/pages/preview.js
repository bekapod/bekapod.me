/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import pathOr from "ramda/src/pathOr";
import { Helmet } from "react-helmet";
import { createClient } from "contentful";
import qs from "qs";
import routes from "../routes";
import config from "../config";
import PageContent from "../components/PageContent";
import PostDate from "../components/PostDate";

export default class extends Component {
  propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    })
  };

  componentDidMount() {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
      host: "preview.contentful.com"
    });

    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });

    client.getEntry(query.entryId).then(entry => {
      this.setState(() => ({
        article: entry
      }));
    });
  }

  render() {
    const article = pathOr(null, ["article"], this.state);
    const { location } = this.props;

    return (
      process.env.NODE_ENV === "development" &&
      article && (
        <PageContent role="main">
          <Helmet>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <title>🌟 {article.fields.title} | Writing | bekapod.me</title>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
            <meta name="description" content={article.fields.summary} />
            <meta property="og:url" content={location.href} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={article.fields.title} />
            <meta property="og:description" content={article.fields.summary} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@bekapod" />
            <link
              rel="canonical"
              href={`${config.baseUrl}${routes.writing}${article.fields.slug}`}
            />
            <script
              type="application/ld+json"
              innerHtml={`{
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "url": ${config.baseUrl}${routes.writing}${article.fields.slug}
            "headline": ${article.fields.title},
            "datePublished": ${article.fields.publishDate},
            "dateModified": ${article.fields.updatedAt},
            "author": {
              "@type": "Person",
              "name": "Becky Jones"
            },
            "description": ${article.fields.summary}
          }`}
            />
          </Helmet>

          <article>
            <h1>{article.fields.title}</h1>
            <PostDate date={article.sys.publishDate} />
            <div
              dangerouslySetInnerHTML={{
                __html: article.fields.content
              }}
            />
          </article>
        </PageContent>
      )
    );
  }
}
