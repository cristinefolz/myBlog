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

var CommentForm = React.createClass({

  render: function() {
      return (
        <div>
          <h3> Comment Form!! </h3>
        </div>
        )
  }
});

module.exports = CommentForm;