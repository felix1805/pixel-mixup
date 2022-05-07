const { AuthenticationError } = require('apollo-server-express');
const { User, Tile, Canvas } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // returns all tiles
    tiles: async (parent, args) => {
      return Tile.find(args);
    },

    // returns all canvases
    canvases: async () => {
      return Canvas.find();
    },

    // returns single canvas
    canvas: async (_, args) => {
      return Canvas.findOne({ _id: args.id })
    },

    
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },


    // adds single tile
    addTile: async (parent, { x, y, color, canvasId }, context) => {

      const tile = await Tile.create({ x, y, color, canvasId, user: context?.user });
      const canvas = await Canvas.findOneAndUpdate(
        { _id: canvasId },
        {

          $addToSet: { tiles: tile._id },
        },
        {
          new: true,
          runValidators: true,
        }
      ).populate("tiles").populate({
        path: 'tiles',
        populate: 'user'
      });
      return canvas.tiles;
    },

    // adds single canvas
    addCanvas: async (parent, { name }) => {
      return await Canvas.create({ name });
    },

    // Adds badge to User
    addBadge: async (parent, { userId, badge }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { badges: badge },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },

    // Adds click to User's total clicks
    addClick: async (parent, { userId, click }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { clicks: click },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
    },
  }
}
module.exports = resolvers;
