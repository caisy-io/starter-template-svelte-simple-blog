import { gql } from "graphql-request";
import { f_NavigationEntry } from "../fragments/NavigationEntry";

export const q_Navigation = gql`
  ${f_NavigationEntry}
  query Navigation {
    Navigation {
      id
      homePage {
        id
        slug
      }
      notFoundPage {
        id
        slug
      }
      entries {
        ...NavigationEntry
      }
    }
  }
`;
