var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ralph`s Portfolio' });
});

/* GET about page. */
router.get('/about', (req, res) => {
  // load the about.hbs view
  res.render('about',{ title: 'About' });
});

/* GET portfolio page. */
router.get('/projects', (req, res) => {
  // load the portfolio.hbs view
  res.render('projects',{ title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', (req, res) => {
  // load the contact.hbs view
  res.render('contact',{ title: 'Contact' });
});

module.exports = router;
