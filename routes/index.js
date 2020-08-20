var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '기부니가조아' });
});

router.get('/refund', function(req, res, next) {
  res.render('refund.ejs');
});

router.get('/receive', function(req, res, next) {
  res.render('receive.ejs');
});

router.get('/page2-1', function(req, res, next) {
  res.render('page2-1', { title: '기부니가조아' });
});

router.get('/page2-2', function(req, res, next) {
  res.render('page2-2', { title: '기부니가조아' });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: '기부니가조아' });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: '기부니가조아' });
});

router.get('/application', function(req, res, next) {
  res.render('application', { title: '기부니가조아' });
});

router.get('/support', function(req, res, next) {
  res.render('support', { title: '기부니가조아' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: '기부니가조아' });
});

router.get('/donatep', function(req, res, next) {
  res.render('donatep', { title: '기부니가조아' });
});


module.exports = router;
