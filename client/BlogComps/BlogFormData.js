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

var BlogForm = require('./BlogForm');

var BlogFormData = React.createClass({

  render: function() {
      return (
        <div>
          <BlogForm />
          <h3> BlogFormData!! </h3>
        </div>
        )
  }
});

module.exports = BlogFormData;