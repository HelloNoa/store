var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/video/getVideos/', (req,res) => {
  res.sendFile(path.join(__dirname, "..", "public", "images", "main_video.mp4"))
});

router.get('/api/assets/:name', (req,res) => {
  res.sendFile(path.join(__dirname, "..", "public", "images", req.params.name))
});

router.get('/documents/:id', (req,res) => {
  res.json({id: req.params.id});
});

module.exports = router;
