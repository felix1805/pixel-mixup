const { Schema, model } = require('mongoose');
const { User, Tile } = require('./index');

const canvasSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  tiles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tile'
    }
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],

});

const Canvas = model('Canvas', canvasSchema);

module.exports = Canvas;