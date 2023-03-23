import { gql } from "graphql-request";

export const f_Author = gql`
  fragment Author on Author {
    name
    role
    avatar{
        ... Asset
    }
    id
  }
`;
