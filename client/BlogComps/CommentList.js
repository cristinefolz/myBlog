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

var CommentCard = require('./CommentCard');

var CommentList = React.createClass({

  render: function() {
      return (
        <div>
          <h3> CommentList!! </h3>
          <CommentCard />
        </div>
        )
  }
});

module.exports = CommentList;