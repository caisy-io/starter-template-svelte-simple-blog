import { gql } from "graphql-request";

export const q_allBlogArticleMeta = gql`
query allBlogArticleMeta($after: String) {
  allBlogArticle(after: $after) {
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