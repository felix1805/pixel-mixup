import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TILE = gql`
mutation addTile($x: Int!, $y: Int!, $color: String!, $canvasId: ID!) {
  addTile(x: $x, y: $y, color: $color, canvasId: $canvasId) {
     _id
     x
     y
     color
     user {
      _id
      username
     }
    }
  }
`;

export const ADD_CANVAS = gql`
mutation addCanvas($name: String!) {
  addCanvas(name: $name) {
    _id
    name
    tiles {
      _id
      x
      y
      color
      user {
        _id
        username
        email
        password
        badges
        clicks
      }
    }
  }
}
`;
