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

function BlogForm(props) {
      return (
        <div>
          <div className="container">
            <form className="col-xs-8 col-xs-offset-2" onSubmit={ props.handlePostSubmit }>
                <h1 className="divider">Create a New Post></h1>

                <fieldset className="form-group">
                    <label for="formGroupExampleInput1">Post Title</label>
                    <input className="form-control" type="text" onChange={ props.handlePostTitleChange } 
                    value={ props.postTitle } id="formGroupExampleInput1" placeholder="Blog Title"/>                    
                </fieldset>

                <fieldset className="form-group">
                    <label for="formGroupExampleInput2">Post Summary</label>
                    <input onChange={ props.handlePostSummaryChange } value={ props.postSummary } type="text"
                    id="formGroupExampleInput2" className="form-control" placeholder="Blog Summary"/>
                </fieldset>

                <fieldset className="form-group">
                    <label for="formGroupExampleInput3">Post Image</label>
                    <input onChange={ props.handlePostImageChange } value={ props.postImage } type="text"
                    id="formGroupExampleInput3" className="form-control" placeholder="url ex: http://image.com"/>
                </fieldset>

                <fieldset className="form-group">
                    <label for="formGroupExampleInput4">Post Content</label>
                    <textarea onChange={ props.handlePostContentChange } value={ props.postContent } type="text"
                    id="formGroupExampleInput4" className="form-control" placeholder="Your Blog"></textarea>
                </fieldset>

                <button className="btn btn-default" type="submit">Submit</button>

            </form>
          </div>
        </div>
        )
};

module.exports = BlogForm;