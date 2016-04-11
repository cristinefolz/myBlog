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

var BlogForm = require('./BlogForm');

// will handle changes to form input fields & POST to database
var BlogFormData = React.createClass({
  propTypes: {
    toggleActiveComp: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      postTitle: null,
      postSummary: null,
      postImage: null,
      postContent: null
    }
  },

  handlePostTitleChange: function(e){
    this.setState({ postTitle: e.target.value })
  },

  handlePostSummaryChange: function(e){
    this.setState({ postSummary: e.target.value })
  },

  handlePostImageChange: function(e){
    this.setState({ postImage: e.target.value })
  },

  handlePostContentChange: function(e){
    this.setState({ postContent: e.target.value })
  },

  handlePostSubmit: function(e){
    e.preventDefault();

    var post = {
      postTitle: this.state.postTitle.trim(),
      postSummary: this.state.postSummary.trim(),
      postImage: this.state.postImage.trim(),
      postContent: this.state.postContent.trim()
    };
    console.log(post);

    if(!post.postTitle && !post.postSummary & !post.postImage && !post.postContent) {
      return;
    } else {
    this.handleNewPost(post);
    this.setState({ postTitle: '', postSummary: '', postImage: '', postContent: '' })

    alert('A new Post has been added!');
    }
  },

  handleNewPost: function(post){
    var self = this;
    $.ajax({
      url: '/api/posts',
      type: 'POST',
      data: post,
      success: function(post) {
        this.props.toggleActiveComp('postList');
        console.log(post);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('api/posts', status, err.toString())
      }.bind(this)
    })
  },

  render: function() {
      return (
        <div>
          <BlogForm { ...this.state } handlePostSubmit={ this.handlePostSubmit }
          handlePostTitleChange={ this.handlePostTitleChange }
          handlePostSummaryChange={ this.handlePostSummaryChange }
          handlePostImageChange={ this.handlePostImageChange }
          handlePostContentChange={ this.handlePostContentChange } />
        </div>
        )
  }
});

module.exports = BlogFormData;