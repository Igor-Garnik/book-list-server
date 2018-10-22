var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');

const authHeader = "x-auth-token";
const authToken = "bad18eba1ff45jk7858b8ae88a77fa30";

const booksRouter = require('./routes/books');
const citiesRouter = require('./routes/cities');
const companiesRouter = require('./routes/companies');
const countriesRouter = require('./routes/countries');
const formatsRouter = require('./routes/formats');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://Igor-Garnik:vfczrfkf123@ds125693.mlab.com:25693/melior-bames-db', { useNewUrlParser: true }
);

var app = express();
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});
app.use('/books', booksRouter);
app.use('/cities', citiesRouter);
app.use('/companies', companiesRouter);
app.use('/countries', countriesRouter);
app.use('/formats', formatsRouter);

function isAuthorized(req) {
  const token = req.get(authHeader);

  return token && token === authToken;
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
