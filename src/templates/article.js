/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import pathOr from "ramda/src/pathOr";
import { Helmet } from "react-helmet";
import routes from "../routes";
import config from "../config";
import PageContent from "../components/PageContent";
import PostDate from "../components/PostDate";
import Code from "../components/Code";
import Comments from "../components/Comments";
import JumpLinkWrapper from "../components/JumpLinkWrapper";
import JumpLink from "../components/JumpLink";

export default class extends Component {
  static propTypes = {
    data: PropTypes.shape({
      current: PropTypes.shape.isRequired,
      next: PropTypes.shape,
      prev: PropTypes.shape
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  render() {
    const { location } = this.props;
    const { current: article, next, prev } = this.props.data;

    return (
      <PageContent role="main">
        <Helmet>
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <title>🌟 {article.title} | Writing | bekapod.me</title>
          {/* eslint-enable jsx-a11y/accessible-emoji */}
          <meta name="description" content={article.summary.summary} />
          <meta property="og:url" content={location.href} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.summary.summary} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@bekapod" />
          <link
            rel="canonical"
            href={`${config.baseUrl}${routes.writing}${article.slug}`}
          />
          <script
            type="application/ld+json"
            innerHtml={`{
            "@context": "http://schema.org",
              "@type": "NewsArticle",
              "headline": ${article.title},
              "datePublished": ${article.publishDate},
              "dateModified": ${article.updatedAt},
              "author": {
                "@type": "Person",
                "name": "Becky Jones"
              },
              "description": ${article.summary.summary}
          }`}
          />
        </Helmet>

        <article>
          <h1>{article.title}</h1>
          <PostDate date={article.publishDate} />
          <Markdown
            source={pathOr("", ["content", "content"])(article)}
            renderers={{
              code: Code
            }}
          />
        </article>

        <JumpLinkWrapper>
          {prev && (
            <JumpLink
              prev
              title={prev.title}
              url={`${routes.writing}${prev.slug}`}
            />
          )}
          {next && (
            <JumpLink
              next
              title={next.title}
              url={`${routes.writing}${next.slug}`}
            />
          )}
        </JumpLinkWrapper>

        <Comments
          shortname={config.disqusShortName}
          identifier={article.id}
          url={`${config.disqusPageUrl}${location.pathname}`}
        />
      </PageContent>
    );
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query articleQuery($current: String!, $next: String, $prev: String) {
    current: contentfulBlogPost(id: { eq: $current }) {
      id
      title
      slug
      content {
        content
      }
      summary {
        summary
      }
      publishDate
      updatedAt
    }

    next: contentfulBlogPost(id: { eq: $next }) {
      title
      slug
    }

    prev: contentfulBlogPost(id: { eq: $prev }) {
      title
      slug
    }
  }
`;
/* eslint-enable no-undef */
