const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    badges: [String]!
    clicks: Int
  }

  type Tile {
    _id: ID
    x: String
    y: String
    color: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    tiles: [Tile]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth

    addTile(x:String!, y:String!, color:String!): Tile

    addBadge(userId: ID!, badge: String!): User
    addClick(userId: ID!, click: Int!): User
  }
`;

module.exports = typeDefs;
