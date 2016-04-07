require('dotenv').config(); // dotenv is the npm package

var express = require('express');
var router = express.Router();
var Twit = require('twit');


var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


// All routes prepended w/ '/api/tweets'
router.route('/:keyword')
  .get(function(req, res){

    var keyword = req.params.keyword; //whatever is typed into the URL is passed in as a parameter called 'keyword'

    T.get('search/tweets', { q: keyword + ' since:2011-07-11', count: 10 }, function(err, data, response) {
                // data.statuses gets us to the array we want to return from      
        var myTweetsArr = data.statuses.map(function(tweet){
          return {text: tweet.text,
              screen_name: tweet.user.screen_name,
              // name: tweet.user.name, 
              created_at: tweet.user.created_at, 
              profile_image_url: tweet.user.profile_image_url,
          }
        });
      // res.json(data)
      res.json(myTweetsArr)
    })
  });


module.exports = router;  // the server.js file will look for the /routes/tweets.js file to get access to the 'router' we 
              // are making available here.