import { gql } from "graphql-request";

export const f_Category = gql`
  fragment Category on Category {
    name
    id
  }
`;
