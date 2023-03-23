import { gql } from "graphql-request";

export const f_Fulltext = gql`
  fragment Fulltext on Fulltext {
    text {
      json
      connections {
        __typename
        ...Asset
      }
    }
    id
  }
`;
