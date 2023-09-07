import { gql } from "graphql-tag";


export const GET_CONTENTS = gql`

query getContents {
  contents {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}

`;