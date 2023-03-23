import { gql } from "graphql-request";

export const f_BlogArticle = gql`
  fragment BlogArticle on BlogArticle {
    text {
      connections {
        __typename
        ...Asset
      }
      json
    }
    teaserImage{
      ...Asset
    }
    teaserHeadline
    teaserDesciption
    slug
    seo {
      id
      description
      keywords
      ogImage {
        ...Asset
      }
      title
    }
    id
  }
`;
