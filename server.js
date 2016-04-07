
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myBlog')

//var fishRoutes = require('./routes/fish');

app.use(express.static('client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

}


app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());



require('./config/passport')(passport);
// routes ======================================================================
require('./routes/user.js')(app, passport);


app.use(function(req, res, next){
    var user = req.user || "no user";  // every request to server will check for a user
    console.log(user);
    next();
});

app.use('/img', express.static('img'));

app.use('/public', express.static('public'));

//app.use('/api/fish', fishRoutes);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


var port = process.env.PORT || 7000;
var router = express.Router();

router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

app.listen(port, function(){
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 burning 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 \n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 on " + port + " 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥")
});