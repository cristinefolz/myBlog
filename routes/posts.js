var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');
var Post = require('../models/post');

router.route('/posts')
  .post(function(req, res){

    var post = new Post();

    post.bloggerName = req.body.bloggerName;
    post.postTitle = req.body.postTitle;
    post.postImage = req.body.postImage;
    post.postContent = req.body.postContent;
    post.postDate = new Date().getTime();

    post.author = req.user._id || "123453868878597159"

    console.log(post.author);

    post.save(function(err, post){
      if(err){
        console.log(err);
      } else {
        res.json(post);
        // res.redirect('/blog');
      }
    })
  })

  .get(function(req, res){

    Post.find()
    .populate('author')
    .populate('comments')
    .exec(function(err, posts){
      if(err){
        console.log(err);
      } else {
        res.json(posts);
      }
    })
  })

router.route('/posts/:post_id')
  .get(function(req, res){
    Post.findById(req.params.post_id, function(err, post){
      if(err){
        console.log(err);
      } else {
        res.json(post);
      }
    })
  })

  .put(function(req, res){
    Post.findById(req.params.post_id, function(err, post){
      if(err){
        console.log(err);
      } else {

        post.bloggerName = req.body.bloggerName ? req.body.bloggerName : post.bloggerName;
        post.postTitle = req.body.postTitle ? req.body.postTitle : post.postTitle;
        post.postImage = req.body.postImage ? req.body.postImage : post.postImage;
        post.postContent = req.body.postContent ? req.body.postContent : post.postContent;

        post.save(function(err, newPost){
          if(err){
            console.log(err);
          } else {
            res.json({notice: 'post updated'});
          }
        })
      }
    })
  })

  .delete(function(req, res){
    Post.remove({_id: req.params.post_id}, function(err, post){
      if(err){
        console.log(err);
      } else {
        res.json({notice: 'post was successfully deleted'});
      }
    })
  });

router.route('/posts/:post_id/comment')
    .post(function(req, res){
        //created new comment; use blog id and user id
        var comment = new Comment();
        comment.body = req.body.body ? req.body.body : comment.body;
        comment.user = '56d4ac27b7f0db5675000001';
        comment.post = req.params.post_id;

        comment.save(function(err, comm){
            if (err){
                res.send(err)
            } else {
                //find blog by id & then push comment into comments array
                Post.findById(req.params.post_id, function(err, post){
                    if(err){
                        res.send(err)
                    } else {
                        //comments = array on our post schema
                        post.comments.push(comm._id);
                        post.save();
                        res.json(comm);
                    }
                })
            }
        })
    })

module.exports = router;