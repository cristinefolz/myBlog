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

var BlogListData = require('./BlogListData');
var EditBlogData = require('./EditBlogData');
var SingleBlogData = require('./SingleBlogData');
var BlogFormData = require('./BlogFormData');

var BlogApp = React.createClass({

  render: function() {
      return (
        <div>
          <BlogListData />
          <h3> BLOG APP!! </h3>
          <EditBlogData />
          <SingleBlogData />
          <BlogFormData />
        </div>
        )
  }
});

module.exports = BlogApp;