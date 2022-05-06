const { Schema, model } = require('mongoose');

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
});

const Canvas = model('Canvas', canvasSchema);

module.exports = Canvas;