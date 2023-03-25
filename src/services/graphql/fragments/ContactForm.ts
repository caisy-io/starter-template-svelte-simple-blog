import { gql } from "graphql-request";

export const f_ContactForm = gql`
  fragment ContactForm on ContactForm {
    id
    headline
  }
`;
