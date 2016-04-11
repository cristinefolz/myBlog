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

var CommentList = React.createClass({

  render: function() {

    var comments = this.props.commentArray.map(comm => {
      var user = comm.user ? comm.user.local : 'no user';
        return (
          <div className="col-xs-7 col-xs-offset-1 comments-border">
            <h2 className="divider">@{ user.username}</h2>
            <p>{ comm.body }></p>
            <p className="comment-deets"> <b>{ user.username}</b> on <b>{ comm.date.substr(0,10) }</b></p>
          </div>
        )
    })
    return (
      <div>
        { comments }
      </div>
    )    
  }
});

module.exports = CommentList;