import { gql } from "graphql-request";

export const q_allPageMeta = gql`
query allPageMeta($after: String) {
  allPage(after: $after) {
    totalCount
    pageInfo{
      hasNextPage
      endCursor
    }
    edges {
      node {
        _meta{
          publishedAt
        }
        id
        slug
      }
    }
  }
}
`;