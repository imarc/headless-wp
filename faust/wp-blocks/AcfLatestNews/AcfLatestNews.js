import { gql } from '@apollo/client';
import React from 'react';
import { LatestNews } from '../../components/LatestNews';

export default function AcfLatestNews(props) {
    return <LatestNews {...props.latestNews}/>
}

AcfLatestNews.fragments = {
    entry: gql`
        fragment AcfLatestNewsFragment on AcfLatestNews {
          latestNews {
            headline
            description
            articles {
              nodes {
                ... on NewsArticle {
                  slug
                  newsArticleFields {
                    description
                    title
                    publishDate
                    image {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `,
    key: `AcfLatestNewsFragment`,
};

AcfLatestNews.displayName = 'AcfLatestNews';
