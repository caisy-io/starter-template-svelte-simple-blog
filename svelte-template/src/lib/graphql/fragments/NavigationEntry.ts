import { gql } from "graphql-request";

export const f_NavigationEntry = gql`
  fragment NavigationEntry on NavigationEntry {
    id
    title
    connection {
      id
      slug
    }
  }
`;
