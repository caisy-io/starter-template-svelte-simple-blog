import { gql } from "graphql-request";
import { f_Asset } from "../fragments/Asset";
import { f_BlogArticle } from "../fragments/BlogArticle";

export const q_allBlogArticleBySlug = gql`
${f_BlogArticle}
${f_Asset}
query allBlogArticleBySlug($slug: String!) {
  allBlogArticle(where: {slug: {eq: $slug}}) {
    edges {
      node {
        ...BlogArticle
      }
    }
  }
}
`;