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

var SingleBlogDetails = require('./SingleBlogDetails');
var CommentList = require('./CommentList');

var SingleBlogData = React.createClass({

  getInitialState: function() {
    return {
    onePost: null,
    comments: [],
    }
  },

  loadOnePostFromServer: function() {
    var self = this;

    $.ajax({
      url: 'api/posts/' + this.props.id,
      method: 'GET'
    }).done(function(data){
      self.setState({ onePost: data })
    })
  },

  loadCommentsFromServer: function(){
    var self = this;

    $.ajax({
      url: 'api/posts/' + this.props.id + '/comment',
      method: 'GET'
    }).done(function(data){
      self.setState({ comments: data })
    })
  },

  componentDidMount: function() {
    this.loadOnePostFromServer();
    this.loadCommentsFromServer();
  },

  render: function() {
    return this.state.onePost ? <SingleBlogDetails onePost={ this.state.onePost } commentArray={ this.state.comments } getId={ this.props.getId } id={ this.props.id } loadOnePostFromServer={ this.loadOnePostFromServer } loadCommentsFromServer={ this.loadCommentsFromServer } toggleActiveComp={ this.props.toggleActiveComp }/> : null;
  },

});

module.exports = SingleBlogData;