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

var CommentFormData = require('./CommentFormData');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var SingleBlogDetails = React.createClass({

  propTypes: {
    toggleActiveComp: React.PropTypes.func.isRequired
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

  deleteSinglePostFromServer: function(){
    if(confirm("Are you sure you want to delete this Post?")) {
      var self = this;
      $.ajax({
        url: '/api/posts/' + this.props.id,
        method: 'DELETE'
      }).done(function(){
        self.loadPostsFromServer();
        self.props.toggleActiveComp('postList');
      })
    }
  },

  render: function() {
    console.log(this.props.commentArray, 'commentArray in SingleBlogDetails');
      return (
        <div>

          <section className="container">
            <div>
              <h2 className="divider">{ this.props.onePost.postTitle }</h2>
                <p> { this.props.onePost.postSummary } </p>
                <p> { this.props.onePost.postContent } </p>
                <p> Posted on <b>{ this.props.onePost.date}</b> </p>

                  <div className="col-xs-offset-10">
                    <a className="btn btn-default btn-sm edit-post pencil" 
                    onClick={ this.props.getId.bind(null, 'editOnePost', this.props.id) }>
                    <span className="glyphicon glyphicon-pencil pencil"></span>
                    <button className="btn btn-default" onClick={ this.deleteSinglePostFromServer.bind(null, this.props.id) }> Delete Post </button>
                    </a>
                  </div>           
            </div>
          </section>
            
          <CommentList commentArray={ this.props.commentArray } />
          <CommentFormData id={ this.props.id } loadOnePostFromServer={ this.props.loadOnePostFromServer } 
          loadCommentsFromServer={ this.props.loadCommentsFromServer } />

        </div>
        )
  }
});

module.exports = SingleBlogDetails;