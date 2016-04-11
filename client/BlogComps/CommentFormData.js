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

var CommentForm = require('./CommentForm');

var CommentFormData = React.createClass({

    getInitialState: function(){
        return{
            body: null
        }
    },

    handleCommentChange: function(e){
        this.setState({ body: e.target.value })
    },

    handleNewCommentPost: function(comment){

        $.ajax({
            url: 'api/posts/' + this.props.id + '/comment',
            type: 'POST',
            data: comment,
            success: function(data){
                this.props.loadCommentsFromServer();
                this.props.loadOnePostFromServer();
                console.log(data)
            }.bind(this),
            error: function(xhr, status, err){
                alert('You must Sign In to leave a comment.');
                console.log('/api/posts' + this.props.id + '/comment', status, err.toString())
            }.bind(this)
        })
    },

    handleCommentSubmit: function(e){
        e.preventDefault();

        var comment = {};
        comment.body = this.state.body.trim();

        if(!comment.body){
            return;
        } else {
            this.handleNewCommentPost(comment);
            this.setState({ body: '' });
        }
    },

    render: function() {
        return (
        <div>
          <CommentForm handleCommentChange={ this.handleCommentChange }
            handleCommentSubmit={this.handleCommentSubmit}
            body={ this.state.body } />
        </div>
        )
  }
});

module.exports = CommentFormData;