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
var BlogCard = require('./BlogCard');

function BlogList(props){
  var allPosts = props.postArray.map(post => {
    return (
      <BlogCard
        getId={ props.getId }
        postTitle={ post.postTitle }
        postSummary={ post.postSummary }
        postImage={ post.postImage }
        postContent={ post.postContent }
        date={ post.date }
        />
    )
  })

  return (
    <div className="container post-list">
      { allPosts }
    </div>
    )
};

module.exports = BlogList;