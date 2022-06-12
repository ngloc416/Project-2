var express = require("express");
var router = express.Router();

var fs = require("fs");
var lessons = fs.readdirSync("./public/data/lessons");
var documents = fs.readdirSync("./public/data/documents");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: req.path });
});

router.get("/dongtubatquytac", function (req, res) {
  res.render("index", { title: req.path });
});

router.get("/nguphap", function (req, res) {
  res.render("index", { title: req.path, lessons: lessons });
});

router.get("/nguphap/:lesson", function (req, res) {
  res.render("index", { title: req.params.lesson });
});

router.get("/tuvung", function (req, res) {
  res.render("index", { title: req.path });
});

router.get("/tailieu", function (req, res) {
  res.render("index", { title: req.path, documents: documents });
});

router.get("/tailieu/:document", function (req, res) {
  res.render("index", { title: req.params.document });
});

router.get("/dethi", function (req, res) {
  res.render("index", { title: req.path });
});

module.exports = router;
