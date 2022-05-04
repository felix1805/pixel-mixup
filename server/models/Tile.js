const { Schema, model } = require('mongoose');
const { User } = require('./User');

const tileSchema = new Schema({
  x: {
    type: String,
    required: true,
  },
  y: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Tile = model('Tile', tileSchema);

module.exports = Tile;