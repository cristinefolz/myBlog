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

var EditBlogForm = require('./EditBlogForm');

// load a single post, make changes, PUT to server
var EditBlogData = React.createClass({

  getInitialState: function(){
    return {
      postTitle: null,
      postSummary: null,
      postImage: null,
      postContent: null
    }
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  loadSinglePostFromServer: function(){
    var self = this;

    $.ajax({
      url: 'api/posts/' + this.props.id,
      method: 'GET'
    }).done(function(post){
      self.setState({
        postTitle: post.postTitle,
        postSummary: post.postSummary,
        postImage: post.postImage,
        postContent: post.postContent
      })
    })
  },

  componentDidMount: function(){
    this.loadSinglePostFromServer()
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

  handlePostUpdateSubmit: function(e){
    e.preventDefault();

    var postData = {
      postTitle: this.state.postTitle.trim(),
      postSummary: this.state.postSummary.trim(),
      postImage: this.state.postImage.trim(),
      postContent: this.state.postContent.trim()
    };

    console.log(postData);
    this.submitPostUpdateToServer(postData);

    alert('You have updated this Post!');
  },

  submitPostUpdateToServer: function(postData){

    $.ajax({
      url: 'api/posts/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: postData,
      success: function(data){
        this.props.toggleActiveComp('postList');
        this.context.sendNotification('Updated the Post!');
      }.bind(this),
      error: function(xhr, status, err){
        console.log('api/posts/', status, err.toString())
      }.bind(this)
    })
  },

  render: function() {
      return (
        <div>
          <EditBlogForm { ...this.state } handlePostUpdateSubmit={ this.handlePostUpdateSubmit }
          handlePostTitleChange={ this.handlePostTitleChange }
          handlePostSummaryChange={ this.handlePostSummaryChange }
          handlePostImageChange={ this.handlePostImageChange }
          handlePostContentChange={ this.handlePostContentChange } />
        </div>
        )
  }
});

module.exports = EditBlogData;