var faker = require('faker');
var Post = require('./models/post');
var Comment = require('./models/comment');
var User = require('./models/user');

module.exports = {

  makeData: function(){
    this.createUsers();
    this.createBlogPosts();
    this.createComments();
  },

  createUsers: function() {

    for (var i = 0; i < 20; i++){
      var user = new User({
        local: {
          email: faker.internet.email(),
          password: faker.internet.password(),
          username: faker.internet.userName(),
        }       
      })
      user.save();
    };
  },

  getRandomUserId: function(){

   User.count().exec(function(err, count){

       var random = Math.floor(Math.random() * count);

       User.findOne().skip(random).exec(
         function (err, result) {

           return result._id

       });
   });
  },

  getRandomPostId: function(){

    Post.count().exec(function(err, count){

         var random = Math.floor(Math.random() * count);

         Post.findOne().skip(random).exec(
           function (err, result) {

             return result._id

       });
    });
  },

  createComments: function() {
    for (var i = 0; i < 20; i++){
      var comment = new Comment({
        body: faker.lorem.sentence(),
        date: faker.date.recent(),
        post: this.getRandomPostId(),
        user: this.getRandomUserId(),
      });
      comment.save();
    };
  },


  createBlogPosts: function() {
    console.log('trying to create a post');
      for (var i = 0; i < 20; i++){
        var post = new Post({
          postTitle: faker.lorem.words(),
          postSummary: faker.lorem.words(),
          postImage: faker.image.cats(),
          postContent: faker.lorem.paragraphs(),
          author: this.getRandomUserId(),
          date: faker.date.recent(),
        });
        post.save();
      };

    console.log('there are now' + Post.find().count() + ' posts in the database');
  },

};

