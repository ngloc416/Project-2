var express = require('express');
var router = express.Router();

var fs = require('fs');
var lessons = fs.readdirSync('./public/data/lessons');
var documents = fs.readdirSync('./public/data/documents');
var vocabulary = fs.readdirSync('./public/data/vocabulary');
var exams = fs.readdirSync('./public/data/exams');
var keys = fs.readdirSync('./public/data/keys');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: req.path });
});

router.get('/dongtubatquytac', function (req, res) {
  res.render('index', { title: req.path });
});

router.get('/nguphap', function (req, res) {
  res.render('index', { title: req.path, lessons: lessons });
});

router.get('/nguphap/:lesson', function (req, res) {
  res.render('index', { title: req.params.lesson });
});

router.get('/tuvung', function (req, res) {
  res.render('index', { title: req.path, vocabulary: vocabulary });
});

router.get('/tuvung/:vocabulary', function (req, res) {
  res.render('index', { title: req.params.vocabulary });
});

router.get('/tailieu', function (req, res) {
  res.render('index', { title: req.path, documents: documents });
});

router.get('/tailieu/:document', function (req, res) {
  res.render('index', { title: req.params.document });
});

router.get('/dethi', function (req, res) {
  res.render('index', { title: req.path, exams: exams });
});

router.get('/dethi/:exam', function (req, res) {
  res.render('index', { title: req.params.exam });
});

router.get('/dapan', function (req, res) {
  res.render('index', { title: req.path, keys: keys });
});

router.get('/dapan/:key', function (req, res) {
  res.render('index', { title: req.params.key });
});

module.exports = router;
