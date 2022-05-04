const { Schema, model } = require('mongoose');
const { User, Canvas } = require('./index');

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