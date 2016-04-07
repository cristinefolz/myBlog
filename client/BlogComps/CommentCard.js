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

var CommentCard = React.createClass({

  render: function() {
      return (
        <div>
          <h3> Comment Card!! </h3>
        </div>
        )
  }
});

module.exports = CommentCard;