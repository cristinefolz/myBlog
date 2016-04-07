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

var EditBlogForm = require('./EditBlogForm');

var EditBlogData = React.createClass({

  render: function() {
      return (
        <div>
          <EditBlogForm />
          <h3> Edit Blog Data!! </h3>
        </div>
        )
  }
});

module.exports = EditBlogData;