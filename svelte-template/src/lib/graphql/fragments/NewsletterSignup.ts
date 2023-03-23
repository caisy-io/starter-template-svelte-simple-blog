import { gql } from "graphql-request";

export const f_NewsletterSignup = gql`
  fragment NewsletterSignup on NewsletterSignup {
    headline
    subheadline
    id
  }
`;
