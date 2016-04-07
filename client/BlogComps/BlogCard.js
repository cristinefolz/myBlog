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

var BlogCard = React.createClass({

  render: function() {
      return (
        <div>
          <h3> BlogCard!! </h3>
        </div>
        )
  }
});

module.exports = BlogCard;