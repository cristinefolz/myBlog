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
    //            CommentFormData
    //            CommentForm
    //        CommentList
    //            CommentCard

var React = require('react');

function BlogCard(props){
    return (
        <div className="col-sm-10">
        <br/>

            <div className="card">
                <img className="card-img-top post-image" src={ props.postImage } alt="the perfect picture"></img>
                    <div className="card-block">
                    <a onClick={ props.getId.bind(null, 'showOnePost', props.id) } className="">
                      <h2 className="card-title">{ props.postTitle }</h2></a>
                      <p className="card-title">{ props.postSummary }</p>
                      <section className="line">
                        <p className="date-size">{ props.date.substr(0,10)}</p>
                      </section>
                    </div>
            </div>
        </div>
    )
};

module.exports = BlogCard;