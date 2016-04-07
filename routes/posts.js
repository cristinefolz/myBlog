var express = require('express');
var router = express.Router();

var Comment = require('../models/comment');
var Post = require('../models/post');

router.route('/posts')
  .post(function(req, res, next){

    var post = new Post();

    console.log(req.body, 'THIS IS REQ BODY!!!!!!!!!!!!!!!');

    post.postSummary = req.body.postSummary || 'none';
    post.postTitle = req.body.postTitle || 'none';
    post.postImage = req.body.postImage || 'none';
    post.postContent = req.body.postContent || 'none';
    post.postDate = new Date().getTime();
    post.author = req.user ? req.user._id : "5706e1e4310436d7b284b51d";

    console.log(post);

    post.save(function(err, post){
      if(err){
        console.log(err);
        res.status(500).send(err, 'Something broke!');
        next();
      } else {
        res.json(post);
      }
    });
  })

  .get(function(req, res, next){

    Post.find()
    .populate('author')
    .populate('comments')
    .exec(function(err, posts){
      if(err){
        res.status(500).send(err, 'Something broke!');
        next();
      } else {
        res.json(posts);
      }
    });
  })

router.route('/posts/:post_id')
  .get(function(req, res, next){
    Post.findById(req.params.post_id, function(err, post){
      if(err){
        res.status(500).send(err, 'Something broke!');
        next();
      } else {
        res.json(post);
      }
    });
  })

  .put(function(req, res){
    Post.findById(req.params.post_id, function(err, post, next){
      if(err){
        console.log(err);
        next();
      } else {
        post.postSummary = req.body.postSummary ? req.body.postSummary : post.postSummary;
        post.postTitle = req.body.postTitle ? req.body.postTitle : post.postTitle;
        post.postImage = req.body.postImage ? req.body.postImage : post.postImage;
        post.postContent = req.body.postContent ? req.body.postContent : post.postContent;

        post.save(function(err, newPost){
          if(err){
            res.status(500).send(err, 'Something broke!');
            next();
          } else {
            res.json({notice: 'post updated'});
          }
        })
      }
    });
  })

  .delete(function(req, res){
    Post.remove({_id: req.params.post_id}, function(err, post, next){
      if(err){
        console.log(err);
        res.status(500).send(err, 'Something broke!');
        next();
      } else {
        res.json({notice: 'post was successfully deleted'});
      }
    });
  })

router.route('/posts/:post_id/comment')
    .post(function(req, res, next){
        var comment = new Comment();

        comment.body = req.body.body ? req.body.body : comment.body;
        comment.user = req.user ? req.user._id : "5706e1e4310436d7b284b51d";
        comment.post = req.params.post_id;

        comment.save(function(err, comm){
            if (err){
                res.status(500).send(err, 'Something broke!');
                next();
            } else {
                Post.findById(req.params.post_id, function(err, post, next){
                    if(err){
                        res.status(500).send(err, 'Something broke!');
                        next();
                    } else {
                        post.comments.push(comm._id);
                        post.save();
                        res.json(comm);
                    }
                })
            }
        });
    })

    .get(function(req, res){
        Post.findById(req.params.post_id)
          .populate({
           path: 'comments',
           populate: {
             path: 'user',
             select: 'local.email',
              }
            })
          .exec(function(err, goal, next){
          if (err) {
            res.status(500).send(err, 'Something broke!');
            next();
          } else {
            res.json(goal);
          }
        });
    })

module.exports = router;