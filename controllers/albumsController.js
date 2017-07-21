/************
 * DATABASE *
 ************/
var db = require("../models");

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  db.Album.find({}, function(err,albums){
    if (err) {
      res.status(500).json({error: err.message});
    }
    res.json({albums});
  });
}

// POST /api/albums
function create(req, res) {
  db.Album.create(
    {
      name:req.body.name,
      artistName: req.body.artistName,
      releaseDate: req.body.releaseDate,
      genres: req.body.genres.split(","),

    }, function(err, newAlbum){
      if (err) {
        res.status(500).json({error: err.message});
      }
      res.json(newAlbum);
  // create an album based on request body and send it back as JSON
  });
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
