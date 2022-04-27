var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  }));
var mongoose = require('mongoose');
var Canteen = require("./models/heroine");
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true });


var Heroine = require("./models/heroine");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var heroinesRouter = require('./routes/heroines');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ 
  secret: 'keyboard cat', 
  resave: false, 
  saveUninitialized: false 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/heroines', heroinesRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter)
app.use('/resource', resourceRouter);

var Account =require('./models/account'); 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 
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

// We can seed the collection if needed on server start
async function recreateDB() {

// Delete everything in Heroine
  await Heroine.deleteMany();

  let instance5 = new Heroine({ heroine_name: "Kajol", heroine_color: 'Silver', heroine_cost: 16205 });
  instance5.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved in Heroine")
  });

  let instance6 = new Heroine({ heroine_name: "Samantha", heroine_color: 'Yellow', heroine_cost: 15207 });
  instance6.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved in Heroine")
  });

  let instance7 = new Heroine({ heroine_name: "Hansika", heroine_color: 'Grey', heroine_cost: 21434 });
  instance7.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved in Heroine")
  });

  let instance8 = new Heroine({ heroine_name: "Tamanna", heroine_color: 'Blue', heroine_cost: 41950 });
  instance8.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Fourth object saved in Heroine")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () { console.log("Connection to DB succeeded") });