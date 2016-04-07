
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

var path = require('path');

var mongoose = require('mongoose');

var uriUtil = require('mongodb-uri');

var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGOLAB_URI || "mongodb://localhost/myBlog";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

var port = process.env.PORT || 7000;

var tweetRoutes = require('./routes/tweets');

var User = require('./models/user');

var Post = require('./models/post');
var postRouter = require('./routes/posts');

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
}));
app.use(passport.initialize());
app.use(passport.session());
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
    var user = req.user || "no user";
    next();
});

app.use('/img', express.static('img'));
app.use('/public', express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api', postRouter);
app.use('/api/tweets', tweetRoutes);


var router = express.Router();

router.use(function(req, res, next){
  console.log('Something is happening');
  next();
});

app.listen(port);
console.log('magic happens on ' + port);