// const express = require('express');

// const app = express();

// app.listen(4000, () => {
//     console.log('Listening on port:4000');
// });

// app.set('view-engine', 'hbs')
// app.use(express.static(__dirname+"/public"))

// // Routes

// app.get('/', (req, res) => {
//     res.render("index.hbs", { title: 'Home' });
// });
// app.get('/about', (req, res) => {
//     res.render("about.hbs", { title: 'About' });
// });
// app.get('/projects', (req, res) => {
//     res.render("projects.hbs", { title: 'Projects' });
// });
// app.get('/contact', (req, res) => {
//     res.render("contact.hbs", { title: 'Contact' });
// });


// app.use((req, res) => {
//     res.status(404).render('error.hbs',{message:"Page Not Found",title:"Page Not Found"});
// })



////////////////

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(4000, () => {
    console.log('Listening on port:4000');
});


app.use(express.static(path.join(__dirname + '/public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
