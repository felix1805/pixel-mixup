const { Schema, model } = require('mongoose');

const tileSchema = new Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
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
  canvasId: {
    type: Schema.Types.ObjectId,
    ref: 'Canvas'
  },
});

const Tile = model('Tile', tileSchema);

module.exports = Tile;