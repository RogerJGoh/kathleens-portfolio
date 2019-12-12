var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Kathleen Nita" });
});

router.get('/about_me', function(req, res, next) {
  res.render('about me', { title: "Kathleen Nita" });
});

router.get('/commission_work', function(req, res, next) {
  res.render('commission work', { title: "Kathleen Nita" });
});

router.get('/not_a_fairy_tale', function(req, res, next) {
  res.render('not a fairy tale', { title: "Kathleen Nita" });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Kathleen Nita" });
});

module.exports = router;
