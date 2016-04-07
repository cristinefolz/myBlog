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

var BlogList = require('./BlogList');

var BlogListData = React.createClass({

  render: function() {
      return (
        <div>
          <BlogList />
          <h3> BlogListData!! </h3>
        </div>
        )
  }
});

module.exports = BlogListData;