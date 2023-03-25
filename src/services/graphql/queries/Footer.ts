import { gql } from "graphql-request";

export const q_Footer = gql`
  query Footer {
    Footer {
      id
      content {
        json
      }
    }
  }
`;
