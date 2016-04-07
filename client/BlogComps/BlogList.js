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

var BlogCard = require('./BlogCard');

var BlogList = React.createClass({

  render: function() {
      return (
        <div>
          <BlogCard />
          <h3> BlogList!! </h3>
        </div>
        )
  }
});

module.exports = BlogList;