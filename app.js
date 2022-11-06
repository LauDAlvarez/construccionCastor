var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const publicPath = path.resolve(__dirname, './public')
const session = require('express-session');
const methodOverride =  require('method-override');
var app = express();

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));
app.use(session({
  secret: 'secretitoCastor', 
  resave: false,
  saveUninitialized: false,
}));
app.use(userLoggedMiddleware);
app.use(methodOverride('_method'));
app.use(cors());

// Rutas
const productRoute = require('./src/routes/productsRoutes')
const userRoute = require('./src/routes/userRoutes');

// Rutas API's
const apiUserRoutes = require('./src/routes/api/apiUserRoutes');
const apiProductRoutes = require('./src/routes/api/apiProductRoutes');

app.use('/', productRoute);
app.use('/users', userRoute);
app.use('/api/v1/users', apiUserRoutes);
app.use('/api/v1/products', apiProductRoutes);

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
