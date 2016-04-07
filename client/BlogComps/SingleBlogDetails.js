    // BlogApp
    //    BlogListData
    //        BlogList
    //            BlogCard
    //    EditBlogData
    //        EditBlogForm
    //    BlogFormData
    //        BlogForm
    //    SingleBlogData
    //        SingleBlogDetails
    //            CommentFormData
    //            CommentForm
    //        CommentList
    //            CommentCard

var React = require('react');
var ReactDOM = require('react-dom');

var CommentFormData = require('./CommentFormData');
var CommentForm = require('./CommentForm');

var SingleBlogDetails = React.createClass({

  render: function() {
      return (
        <div>
          <CommentFormData />
          <CommentForm />
          <h3> Single Blog Details!! </h3>
        </div>
        )
  }
});

module.exports = SingleBlogDetails;