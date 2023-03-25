import { gql } from "graphql-request";

export const f_Asset = gql`
  fragment Asset on Asset {
    title
    src
    originType
    keywords
    id
    dominantColor
    description
    copyright
    author
  }
`;
