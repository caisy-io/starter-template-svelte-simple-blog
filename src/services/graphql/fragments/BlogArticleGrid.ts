import { gql } from "graphql-request";

export const f_BlogArticleGrid = gql`
  fragment BlogArticleGrid on BlogArticleGrid {
    id
    headline
    subheadline
    articles {
      ... on BlogArticle {
        id
        slug
        teaserDesciption
        teaserHeadline
        teaserImage {
          ...Asset
        }
        text {
          connections {
            __typename
            ...Asset
          }
          json
        }
      }
    }
  }
`;
