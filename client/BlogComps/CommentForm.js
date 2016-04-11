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

var CommentForm = React.createClass({

  render: function() {
      return (
        <div>

            <form className="col-xs-6" onSubmit={ this.props.handleCommentSubmit }>
                <h3 className="divider">Leave a Comment></h3>

                <fieldset className="form-group">
                    <label >Comment</label>
                    <textarea onChange={ props.handleCommentChange } value={ this.props.body } type="text"
                     className="form-control" placeholder="Your Comment"></textarea>
                </fieldset>

                <button className="btn btn-default" type="submit">Leave Comment</button>

            </form>

        </div>
        )
  }
});

module.exports = CommentForm;