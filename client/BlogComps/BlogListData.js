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
    //            CommentList
    //            CommentFormData
    //                CommentForm

var React = require('react');
var ReactDOM = require('react-dom');

var BlogList = require('./BlogList');

var BlogListData = React.createClass({

  getInitialState: function(){
    return {
      postArray: []
    }
  },

  loadPostsFromServer: function(){
    var self = this;

    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(posts){
      self.setState({ postArray: posts})
    })
  },

  componentDidMount: function(){
    this.loadPostsFromServer();
  },

  render: function() {
      return this.state.postArray ? <BlogList postArray={ this.state.postArray } getId={ this.props.getId } /> : null;
  }

});

module.exports = BlogListData;