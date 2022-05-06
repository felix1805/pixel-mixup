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
    x: Int
    y: Int
    color: String
    user: User
    canvas: Canvas
  }

  type Canvas {
    _id: ID
    name: String
    tiles: [Tile]
    users: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    me: User
    tiles: [Tile]!
    canvases: [Canvas]!
    canvas(id: ID!): Canvas
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth

    addTile(canvasId:ID!, x:Int!, y:Int!, color:String!): Canvas

    addCanvas(name:String!): Canvas

    addBadge(userId: ID!, badge: String!): User
    addClick(userId: ID!, click: Int!): User
  }
`;

module.exports = typeDefs;
