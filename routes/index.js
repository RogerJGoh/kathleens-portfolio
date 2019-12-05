var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Kat's Portfolio" });
});

router.get('/about_me', function(req, res, next) {
  res.render('about me', { title: "Kat's Portfolio" });
});

router.get('/commission_work', function(req, res, next) {
  res.render('commission work', { title: "Kat's Portfolio" });
});

router.get('/not_a_fairy_tale', function(req, res, next) {
  res.render('not a fairy tale', { title: "Kat's Portfolio" });
});

module.exports = router;
