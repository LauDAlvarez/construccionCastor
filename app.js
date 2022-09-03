var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const publicPath = path.resolve(__dirname, './public')
const session = require('express-session');
const methodOverride =  require('method-override');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));
app.use(session({secret: 'secretitoCastor', resave: false,
saveUninitialized: false}));
app.use(methodOverride('_method'));

// Rutas
const mainRoute = require('./src/routes/indexRoutes');
const userRoute = require('./src/routes/usersRoutes');
// const productRoute = require('./src/routes/productsRoutes');


app.use('/', mainRoute);
app.use('/users', userRoute);
// app.use('/products', productRoute);

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
