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

function EditBlogForm(props) {
      return (
        <div>
          <div className="container">
            <form className="col-xs-8 col-xs-offset-2" onSubmit={ props.handleUpdatePostSubmit }>
                <h1 className="divider">Update this Post Post></h1>

                <fieldset className="form-group">
                    <label >Post Title</label>
                    <input className="form-control" type="text" onChange={ props.handlePostTitleChange } 
                    value={ props.postTitle } placeholder="Blog Title"/>                    
                </fieldset>

                <fieldset className="form-group">
                    <label >Post Summary</label>
                    <input onChange={ props.handlePostSummaryChange } value={ props.postSummary } type="text"
                     className="form-control" placeholder="Blog Summary"/>
                </fieldset>

                <fieldset className="form-group">
                    <label >Post Image</label>
                    <input onChange={ props.handlePostImageChange } value={ props.postImage } type="text"
                     className="form-control" placeholder="url ex: http://image.com"/>
                </fieldset>

                <fieldset className="form-group">
                    <label >Post Content</label>
                    <textarea onChange={ props.handlePostContentChange } value={ props.postContent } type="text"
                     className="form-control" placeholder="Your Blog"></textarea>
                </fieldset>

                <button className="btn btn-default" type="submit">Submit</button>

            </form>
          </div>
        </div>
        )
};

module.exports = EditBlogForm;