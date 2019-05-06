/* eslint-disable react/prefer-stateless-function, react/no-danger */
import { graphql } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import routes from "../routes";
import config from "../config";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import PostDate from "../components/PostDate";
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
    const { data } = this.props;
    const { current: article, next, prev } = data;
    const url = `${config.baseUrl}${routes.writing}${article.slug}/`;
    const title = `${article.title} | Writing | bekapod.me`;

    return (
      <Layout>
        <PageContent>
          <Helmet>
            {/* eslint-disable jsx-a11y/accessible-emoji */}
            <title>🌟 {title}</title>
            {/* eslint-enable jsx-a11y/accessible-emoji */}
            <meta name="description" content={article.summary.summary} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={article.title} />
            <meta property="og:description" content={article.summary.summary} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@bekapod" />
            <link rel="canonical" href={url} />
            <script type="application/ld+json">
              {`{
                "@context": "http://schema.org",
                "@type": "ItemPage",
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
                        "@id": "${config.baseUrl}${routes.writing}/",
                        "name": "Writing"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "@id": "${url}",
                        "name": "${article.title}"
                      }
                    }
                  ]
                },
                "mainEntity": {
                  "@id": "${url}"
                },
                "publisher": {
                  "@id": "${config.baseUrl}/about/"
                },
                "name": "${title}",
                "description": "${article.summary.summary}"
              }`}
            </script>
            <script type="application/ld+json">
              {`{
                "@context": "http://schema.org",
                "@id": "${url}",
                "@type": "BlogPosting",
                "headline": "${article.title}",
                "datePublished": "${article.publishDate}",
                "dateModified": "${article.updatedAt}",
                "author": {
                  "@id": "${config.baseUrl}/about/",
                  "@type": "Person",
                  "name": "Becky Jones"
                },
                "description": "${article.summary.summary}",
                "publisher": {
                  "@id": "${config.baseUrl}/about/"
                }
              }`}
            </script>
          </Helmet>

          <article>
            <h1>{article.title}</h1>
            <PostDate date={article.publishDate} />
            <div
              dangerouslySetInnerHTML={{
                __html: article.content.childMarkdownRemark.html
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
            config={{ identifier: article.id, url, title: article.title }}
          />
        </PageContent>
      </Layout>
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
        childMarkdownRemark {
          html
        }
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
