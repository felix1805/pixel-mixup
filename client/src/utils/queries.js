import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_CANVASES = gql`
  query canvases {
    canvases {
      _id
      name
      tiles {
        _id
        x
        y
        color
      }
    }
  }
`

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_TILES = gql`
  query tiles {
    tiles {
      x
      y
      color
      _id
      user {
        username
      }
    }
  }
`;
