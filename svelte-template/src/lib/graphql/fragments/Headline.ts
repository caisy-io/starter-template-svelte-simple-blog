import { gql } from "graphql-request";

export const f_Headline = gql`
  fragment Headline on Headline {
    subheadline
    id
    headline
  }
`;
