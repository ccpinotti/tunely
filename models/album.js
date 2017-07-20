let mongoose = require("mongoose");
  Schema = mongoose.Schema;

let AlbumSchema = new Schema({
  albumName: String,
  artistName: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  albumImage: String,
  releaseDate: Date
});

let Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
