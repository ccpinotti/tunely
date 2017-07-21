var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let SongModel = require('./song.js');


let AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String],
  songs: [SongModel.schema]
  // {
  //   type: Schema.types.ObjectId,
  //   ref: 'Song'
  // }
});

let Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
