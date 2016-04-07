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

var SingleBlogDetails = require('./SingleBlogDetails');
var CommentList = require('./CommentList');

var SingleBlogData = React.createClass({

  render: function() {
      return (
        <div>
          <SingleBlogDetails />
          <h3> SingleBlogData!! </h3>
          <CommentList />
        </div>
        )
  }
});

module.exports = SingleBlogData;